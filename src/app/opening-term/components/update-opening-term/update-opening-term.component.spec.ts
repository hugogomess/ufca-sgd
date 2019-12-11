import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOpeningTermComponent } from './update-opening-term.component';

describe('UpdateOpeningTermComponent', () => {
  let component: UpdateOpeningTermComponent;
  let fixture: ComponentFixture<UpdateGutMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOpeningTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOpeningTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
