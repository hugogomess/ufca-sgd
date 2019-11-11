import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailbleServiceComponent } from './unavailble-service.component';

describe('UnavailbleServiceComponent', () => {
  let component: UnavailbleServiceComponent;
  let fixture: ComponentFixture<UnavailbleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnavailbleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnavailbleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
