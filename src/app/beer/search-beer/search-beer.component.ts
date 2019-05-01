import { Component, OnInit } from '@angular/core';

import { Beer } from '../../shared/models/beer.model';

@Component({
  selector: 'app-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.scss']
})
export class SearchBeerComponent implements OnInit {

  allBeers: Beer[];

  constructor() { }

  ngOnInit() {
  }

}
