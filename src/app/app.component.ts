import { Component, OnInit } from '@angular/core';

import { BeerService } from './shared/services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'glofox-beers';

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
   
  }
}
