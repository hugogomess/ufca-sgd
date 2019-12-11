import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGutMatricesComponent } from './list-gut-matrices.component';

describe('ListGutMatricesComponent', () => {
  let component: ListGutMatricesComponent;
  let fixture: ComponentFixture<ListGutMatricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGutMatricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGutMatricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
