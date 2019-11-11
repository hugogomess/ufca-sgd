import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPageComponent } from './demand-page.component';

describe('DemandPageComponent', () => {
  let component: DemandPageComponent;
  let fixture: ComponentFixture<DemandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
