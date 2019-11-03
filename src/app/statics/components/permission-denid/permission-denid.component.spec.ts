import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDenidComponent } from './permission-denid.component';

describe('PermissionDenidComponent', () => {
  let component: PermissionDenidComponent;
  let fixture: ComponentFixture<PermissionDenidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionDenidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDenidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
