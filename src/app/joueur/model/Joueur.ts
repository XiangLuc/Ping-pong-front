export interface Joueur {
    _id: number;
    categorie: { age: number, niveau: string }[];
    nom: string;
    point: number;
    prenom: string;
    sexe: string;
}  