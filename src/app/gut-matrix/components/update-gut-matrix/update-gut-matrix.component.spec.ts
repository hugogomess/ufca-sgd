import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGutMatrixComponent } from './update-gut-matrix.component';

describe('UpdateGutMatrixComponent', () => {
  let component: UpdateGutMatrixComponent;
  let fixture: ComponentFixture<UpdateGutMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGutMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGutMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
