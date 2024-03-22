export interface Joueur {
    _id: string;
    nom: string;
    prenom: string;
    categorie: { age: number; niveau: string };
    sexe: string;
    point: number;
}  