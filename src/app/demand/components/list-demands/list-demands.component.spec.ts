import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandsComponent } from './list-demands.component';

describe('ListDemandsComponent', () => {
  let component: ListDemandsComponent;
  let fixture: ComponentFixture<ListDemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
