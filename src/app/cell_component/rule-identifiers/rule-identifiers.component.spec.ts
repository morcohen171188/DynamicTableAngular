import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleIdentifiersComponent } from './rule-identifiers.component';

describe('RuleIdentifiersComponent', () => {
  let component: RuleIdentifiersComponent;
  let fixture: ComponentFixture<RuleIdentifiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleIdentifiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleIdentifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
