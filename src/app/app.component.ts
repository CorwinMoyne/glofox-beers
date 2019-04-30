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
    this.beerService.getAllBeers()
      .subscribe(beer => {
        console.log(JSON.stringify(beer));
      });
  }
}
