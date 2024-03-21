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
      (joueurs:any) => {
        this.joueurs = joueurs;
      }
    )
  }
  
}