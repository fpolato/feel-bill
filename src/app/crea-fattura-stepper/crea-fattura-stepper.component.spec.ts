import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaFatturaStepperComponent } from './crea-fattura-stepper.component';

describe('CreaFatturaStepperComponent', () => {
  let component: CreaFatturaStepperComponent;
  let fixture: ComponentFixture<CreaFatturaStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaFatturaStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaFatturaStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
