import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpeningTermComponent } from './add-opening-term.component';

describe('AddOpeningTermComponent', () => {
  let component: AddOpeningTermComponent;
  let fixture: ComponentFixture<AddOpeningTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOpeningTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpeningTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
