import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JoueurService } from '../joueur.service';

@Component({
  selector: 'app-add-joueur-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-joueur-form.component.html',
  styleUrl: './add-joueur-form.component.css'
})
export class AddJoueurFormComponent implements OnInit {

  newJoueur: any = {
    categorie: { age: null, niveau: null },
    point: 0 
  };

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {}

  addJoueur() {

    this.joueurService.addJoueur(this.newJoueur).subscribe(
      (response) => {
        console.log('Joueur ajouté avec succès:', response);
        this.newJoueur = {
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