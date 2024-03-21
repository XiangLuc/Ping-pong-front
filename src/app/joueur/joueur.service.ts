import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private httpClient: HttpClient) { }

  getAllJoueurs() {
    return this.httpClient.get('http://127.0.0.1:5000/joueurs');
  }

  addJoueur(joueurData: any) {
    return this.httpClient.post<any>('http://127.0.0.1:5000/joueurs', joueurData);
  }
  
}