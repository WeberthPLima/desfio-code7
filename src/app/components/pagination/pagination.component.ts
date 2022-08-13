import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page: number = 1;
  @Input() totalResults: number = 1;
  @Output() pageChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public qtdPages(): Array<number> {
    const qtdPages = [];
    const calcPages = Math.ceil(this.totalResults / 10);
    for (let i = 1; i <= calcPages; i++) {
      qtdPages.push(i);
    }
    return qtdPages;
  }

  setPage(page: number) {
    this.pageChange.emit(page);
  }

}
