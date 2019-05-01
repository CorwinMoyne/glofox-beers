import { Observable, of } from 'rxjs';

export class BeerStubService {

    /**
     * returns a random beer Observable
     */
    getRandomBeer(): Observable<any> {
        return;
    }

    /**
     * returns a random alcoholic beer Observable
     */
    getRandomNonAlcoholicBeer(): Observable<any> {
        return;
    }

    /**
     * returns all beers
     *
     * @param page the page number
     * @param perPage items per page
     * @param beerName beer name
     * @param brewedBefore brewed before date
     */
    getAllBeers(page?: string, perPage?: string, beerName?: string, brewedBefore?: Date): Observable<any[]> {
        return of([]);
    }
}
