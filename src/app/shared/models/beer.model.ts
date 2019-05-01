export class Beer {

    id: number;
    name: string;
    tagline: string;
    abv: number;
    description: string;

    constructor(beer: any) {
        this.id = beer.id;
        this.name = beer.name;
        this.tagline = beer.tagline;
        this.abv = beer.abv;
        this.description = beer.description;
    }
}
