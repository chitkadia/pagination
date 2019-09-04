import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TkPaginationComponent } from './tk-pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TkPaginationComponent],
  exports: [TkPaginationComponent]
})
export class TkPaginationModule { }
