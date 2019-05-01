import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginate-beer',
  templateUrl: './paginate-beer.component.html',
  styleUrls: ['./paginate-beer.component.scss']
})
export class PaginateBeerComponent {

  @Input() page: number;
  @Input() pageSize: number;
  @Input() perPage: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  /**
   * emits the page number to the parent
   * 
   * @param page the page number
   */
  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}
