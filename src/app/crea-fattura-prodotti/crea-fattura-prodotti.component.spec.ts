import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaFatturaProdottiComponent } from './crea-fattura-prodotti.component';

describe('CreaFatturaProdottiComponent', () => {
  let component: CreaFatturaProdottiComponent;
  let fixture: ComponentFixture<CreaFatturaProdottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaFatturaProdottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaFatturaProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
