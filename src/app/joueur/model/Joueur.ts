export interface Joueur {
    _id: number;
    categorie: { age: number, niveau: number }[];
    nom: string;
    point: number;
    prenom: string;
    sexe: string;
}  