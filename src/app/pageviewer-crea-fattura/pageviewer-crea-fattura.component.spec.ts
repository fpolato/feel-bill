import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageviewerCreaFatturaComponent } from './pageviewer-crea-fattura.component';

describe('PageviewerCreaFatturaComponent', () => {
  let component: PageviewerCreaFatturaComponent;
  let fixture: ComponentFixture<PageviewerCreaFatturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageviewerCreaFatturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageviewerCreaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
