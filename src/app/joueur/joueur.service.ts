import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joueur } from './model/Joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private httpClient: HttpClient) { }

  getAllJoueurs(): Observable<Joueur[]> {
    return this.httpClient.get<Joueur[]>('http://127.0.0.1:5000/joueurs');
  }

  addJoueur(joueurData: any) {
    return this.httpClient.post<any>('http://127.0.0.1:5000/joueurs', joueurData);
  }
  
}