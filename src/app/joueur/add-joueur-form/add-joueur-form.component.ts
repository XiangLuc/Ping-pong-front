import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-joueur-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-joueur-form.component.html',
  styleUrl: './add-joueur-form.component.css'
})
export class AddJoueurFormComponent implements OnInit {

  newJoueur: any;
  private http = inject(HttpClient);

  ngOnInit(): void {
    // Données JSON à envoyer
    const data = { "_id": 1, "nom": "John Doe" };

    // URL de l'endpoint à laquelle envoyer la requête POST
    const url = 'http://localhost:5000/joueurs';

    // Effectuer la requête POST
    this.http.post(url, data).subscribe(
      (response) => {
        console.log('Réponse de la requête POST :', response);
      },
      (error) => {
        console.error('Erreur lors de la requête POST :', error);
      }
    );
  }

}