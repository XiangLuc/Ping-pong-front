import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JoueurService } from '../joueur.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-joueur-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-joueur-form.component.html',
  styleUrl: './add-joueur-form.component.css'
})
export class AddJoueurFormComponent implements OnInit {

  message:any = undefined;

  newJoueur: any = {
    _id: Math.random().toString(36).substr(2, 9),
    categorie: { age: null, niveau: null },
    point: 0 
  };

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {}

  addJoueur() {

    this.joueurService.addJoueur(this.newJoueur).subscribe(
      (response) => {
        this.message = response;
        console.log('Joueur ajouté avec succès:', response);
        this.newJoueur = {
          _id: Math.random().toString(36).substr(2, 9),
          categorie: { age: null, niveau: null },
          point: 0
        };
      }
    );
  }

  isFormValid() {
    return this.newJoueur.nom && this.newJoueur.prenom && this.newJoueur.categorie?.age && this.newJoueur.categorie?.niveau && this.newJoueur.sexe;
  }

}