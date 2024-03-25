import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../joueur.service';
import { Joueur } from '../model/Joueur';

@Component({
  selector: 'app-joueur-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './joueur-list.component.html',
  styleUrls: ['./joueur-list.component.css']
})
export class JoueurListComponent implements OnInit {

  constructor(private joueurService: JoueurService) {}

  joueurs: Joueur[] = [];

  ngOnInit(): void {
   this.getAllJoueurs();
   console.log(this.joueurs)
  }

  getAllJoueurs() {
    this.joueurService.getAllJoueurs().subscribe(
      (res) => {
        this.joueurs = res;
        console.log(res)
      },
      (err) => {
        console.log("Erreur :", err);
      }
    );
  }
  

  onClickOpenDetails(joueur: Joueur) {
    //this.router.navigate(['/joueur',joueur._id]);
  }
  
}