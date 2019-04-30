import { Component, OnInit } from '@angular/core';

import { BeerService } from './shared/services/beer-service/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'glofox-beers';

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    // this.beerService.getAllBeers(null, null, null, new Date('2010-02-01'))
    //   .subscribe(beer => {
    //     console.log(JSON.stringify(beer));
    //   });
  }
}
