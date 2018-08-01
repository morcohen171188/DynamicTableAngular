import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceApplicationComponent } from './service-application.component';

describe('ServiceApplicationComponent', () => {
  let component: ServiceApplicationComponent;
  let fixture: ComponentFixture<ServiceApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
