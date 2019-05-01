import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.scss']
})
export class RandomBeerComponent {

  @Input() randomBeer: any;
  @Output() getRandomBeer: EventEmitter<any> = new EventEmitter();
  @Output() getNonAlcoholicBeer: EventEmitter<any> = new EventEmitter();

  /**
   * emits when a random beer is clicked so it can be updated by the parent
   */
  onRandomBeerClick(): void {
    this.getRandomBeer.emit();
  }

  /**
   * emits when a random on alcoholic beer is clicked so it can be updated by the parent
   */
  onNonAlcoholicBeerClick(): void {
    this.getNonAlcoholicBeer.emit();
  }
}
