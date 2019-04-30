import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  allBeers: any[];
  randomBeer: any;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        this.randomBeer = data.beerData[0];
        this.allBeers = data.beerData[1];
        console.log(this.randomBeer);
      });
  }
}
