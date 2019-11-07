import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDemandComponent } from './update-demand.component';

describe('UpdateDemandComponent', () => {
  let component: UpdateDemandComponent;
  let fixture: ComponentFixture<UpdateDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
