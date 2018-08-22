import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaFatturaIntestazioneComponent } from './crea-fattura-intestazione.component';

describe('CreaFatturaIntestazioneComponent', () => {
  let component: CreaFatturaIntestazioneComponent;
  let fixture: ComponentFixture<CreaFatturaIntestazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaFatturaIntestazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaFatturaIntestazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
