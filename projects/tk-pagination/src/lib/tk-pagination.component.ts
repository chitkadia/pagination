import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tkl-pagination',
  template: `
  <div class="pagination width-50" style="display:inline-block;">
  <span>{{dropdownText}}</span>
  <select (change)="onChangePerPage($event.target.value)">
      <option *ngFor="let perPage of pagination" [value]="perPage">{{ perPage }}</option>
  </select>
</div>
<div class="pagination width-50" style="display:inline-block;">

  <div class="text-right right-float" style="margin: 0 1rem;" *ngIf="count > perPage">
      <a href="javascript:void(0);" [ngClass]="(page==1)?'disabled page_arrow':'page_arrow'" (click)="onPrev(page-1)">
          <i class="fa fa-chevron-left"></i>
      </a>

      <a *ngFor="let i of getPages()" (click)="onPage(i)"
          [ngClass]="(i == '...') ? 'avoid-clicks pointer' : (i == page) ? 'pointer' : 'pointer'"
          [ngStyle]="i == page ? footerTextStyle : ''">{{i}}</a>
      <a href="javascript:void(0);" [ngClass]="(page==totalPages())?'disabled page_arrow':'page_arrow'"
          (click)="onNext(page+1)">
          <i class="fa fa-chevron-right"></i>
      </a>
  </div>

  <div class="text-right right-float">
      <div class="footer-text"> Showing {{ getMin() }} - {{ getMax() }} of total {{ count }} records</div>
  </div>
</div>
  `,
  styleUrls: ['./tk-pagination.component.css']
})
export class TkPaginationComponent implements OnInit {

  @Input() page: number = 1;
  @Input() count: number = 0;
  @Input() pagination: Array<any> = [5, 25, 50, 100];
  @Input() selectedValue: number = this.pagination[0];
  @Input() perPage: number = this.pagination[0];
  @Input() footerTextStyle: any = {'color': "white",'background-color': "#4BAD94"};
  @Input() dropdownText: string = "Items per page: ";

  @Output() goPage = new EventEmitter<number>();
  @Output() setPageSize = new EventEmitter<number>();

    pagesToShow = 7;

  constructor() { }

  ngOnInit() {
  }

  getMin(): number {
    let minVal = ((this.perPage * this.page) - this.perPage) + 1;
    if (this.count == 0) {
        minVal = 0;
    }
    return minVal;
  }

  getMax(): number {
      let max = this.perPage * this.page;
      if (max > this.count) {
          max = this.count;
      }
      return max;
  }

  onPage(n: number): void {
      this.goPage.emit(n);
  }

  onPrev(prev: number): void {
      this.goPage.emit(prev);
  }

  onNext(next: number): void {
      this.goPage.emit(next);
  }

  totalPages(): number {
      return Math.ceil(this.count / this.perPage) || 0;
  }

  lastPage(): boolean {
      return this.perPage * this.page > this.count;
  }

  getPages() {
      const c = Math.ceil(this.count / this.perPage);
      const pages: number[] = [];
      const halfWay = Math.ceil(this.pagesToShow / 2);
      const isStart = this.page <= halfWay;
      const isEnd = c - halfWay < this.page;
      const isMiddle = !isStart && !isEnd;

      let ellipsesNeeded = this.pagesToShow < c;
      let i = 1;
      while (i <= c && i <= this.pagesToShow) {
          let label;
          let pageNumber = this.calculatePageNumber(i, this.page, this.pagesToShow, c);
          let openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
          let closingEllipsesNeeded = (i === this.pagesToShow - 1 && (isMiddle || isStart));
          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
              label = '...';
          } else {
              label = pageNumber;
          }

          pages.push(label);
          i++;
      }
      pages.sort((a, b) => a - b);
      return pages;
  }

  private calculatePageNumber(i: number, currentPage: number, paginationRange: number, totalPages: number) {
      let halfWay = Math.ceil(paginationRange / 2);
      if (i === paginationRange) {
          return totalPages;
      } else if (i === 1) {
          return i;
      } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
              return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
              return currentPage - halfWay + i;
          } else {
              return i;
          }
      } else {
          return i;
      }
  }

  onChangePerPage(selectedValue: number): void {
      this.setPageSize.emit(selectedValue);
  }

  ngOnDestroy() {
      this.page = 0;
      this.count = 0;
      this.perPage = 0;
      this.pagesToShow = 0;
  }

}
