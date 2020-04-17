/** DTO étiquette */
export class Etiquette {

    /**Message d'avertissement par défaut: TODO: A VARIABILISER */
    private msg = 'L\'abus d\'alcool est dangereux pour la santé, à consommer avec modération.';

    constructor(
        private id?: string,
        private titre?: string,
        private texte?: string,
        private ingredients?: string,
        private alc?: number,
        private texteAvertissement?: string,
        private couleurLiseret?: string,
        private dateCreation?: Date
    ) { this._texteAvertissement = this.msg }

    public get _id(): string {
        return this.id;
    }
    public set _id(value: string) {
        this.id = value;
    }

    public get _titre(): string {
        return this.titre;
    }
    public set _titre(value: string) {
        this.titre = value;
    }

    public get _texte(): string {
        return this.texte;
    }
    public set _texte(value: string) {
        this.texte = value;
    }

    public get _ingredients(): string {
        return this.ingredients;
    }
    public set _ingredients(value: string) {
        this.ingredients = value;
    }

    public get _texteAvertissement(): string {
        return this.texteAvertissement;
    }
    public set _texteAvertissement(value: string) {
        this.texteAvertissement = value;
    }

    public get _couleurLiseret(): string {
        return this.couleurLiseret;
    }
    public set _couleurLiseret(value: string) {
        this.couleurLiseret = value;
    }

    public get _alc(): number {
        return this.alc;
    }
    public set _alc(value: number) {
        this.alc = value;
    }

    public get _dateCreation(): Date {
        return this.dateCreation;
    }
    public set _dateCreation(value: Date) {
        this.dateCreation = value;
    }
}
