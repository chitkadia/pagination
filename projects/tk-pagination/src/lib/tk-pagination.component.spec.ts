import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkPaginationComponent } from './tk-pagination.component';

describe('TkPaginationComponent', () => {
  let component: TkPaginationComponent;
  let fixture: ComponentFixture<TkPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
