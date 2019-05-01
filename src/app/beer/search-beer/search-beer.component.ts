import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Beer } from '../../shared/models/beer.model';
import { SearchOptions } from '../beer.component';

@Component({
  selector: 'app-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.scss']
})
export class SearchBeerComponent {

  @Input() allBeers: Beer[];
  @Input() searchBy: string;
  @Output() getBeersByName: EventEmitter<string> = new EventEmitter();
  @Output() getBeersByDate: EventEmitter<any> = new EventEmitter();
  searchModel: any;

  /**
   * returns true if user is searching by name
   */
  isSearchByName(): boolean {
    return this.searchBy === SearchOptions.Name;
  }

  /**
   * returns true if user is searching by date
   */
  isSearchByDate(): boolean {
    return this.searchBy === SearchOptions.Date;
  }

  /**
   * emits searchModel when user wants to search
   */
  onSearchClick(): void {
    if (this.isSearchByName()) {
      this.getBeersByName.emit(this.searchModel);
    } else {
      this.getBeersByDate.emit(this.searchModel);
    }
  }
}
