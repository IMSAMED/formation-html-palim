export class Personne {
private num: number;
private nom: string;
private prenom: string;

	constructor($num: number, $nom: string, $prenom: string) {
		this.num = $num;
		this.nom = $nom;
		this.prenom = $prenom;
  }


    public getNum(): number {
        return this.num;
    }

    public setNum(num: number): void {
        this.num = num;
    }

    public getNom(): string {
        return this.nom;
    }

    public setNom(nom: string): void {
        this.nom = nom;
    }

    public getPrenom(): string {
        return this.prenom;
    }

    public setPrenom(prenom: string): void {
        this.prenom = prenom;
    }




}
