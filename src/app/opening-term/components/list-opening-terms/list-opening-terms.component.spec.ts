import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpeningTermsComponent } from './list-opening-terms.component';

describe('ListOpeningTermsComponent', () => {
  let component: ListOpeningTermsComponent;
  let fixture: ComponentFixture<ListOpeningTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOpeningTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOpeningTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
