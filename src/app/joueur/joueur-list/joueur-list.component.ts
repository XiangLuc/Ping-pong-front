import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../joueur.service';
import { Joueur } from '../model/Joueur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joueur-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './joueur-list.component.html',
  styleUrls: ['./joueur-list.component.css']
})
export class JoueurListComponent implements OnInit {

  constructor(private joueurService: JoueurService, private router: Router) {}

  joueurs: Joueur[] = [];

  ngOnInit(): void {
   this.getAllJoueurs();
   console.log(this.joueurs)
  }

  getAllJoueurs(): void {
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
  

  onClickOpenDetails(joueur: Joueur): void {
    this.router.navigate(['/joueur',joueur._id]);
  }
  
}