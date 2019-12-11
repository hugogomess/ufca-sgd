import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGutMatrixComponent } from './add-gut-matrix.component';

describe('AddGutMatrixComponent', () => {
  let component: AddGutMatrixComponent;
  let fixture: ComponentFixture<AddGutMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGutMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGutMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
