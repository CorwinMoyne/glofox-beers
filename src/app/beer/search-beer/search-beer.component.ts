import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.scss']
})
export class SearchBeerComponent implements OnInit {

  allBeers: any[];

  constructor() { }

  ngOnInit() {
  }

}
