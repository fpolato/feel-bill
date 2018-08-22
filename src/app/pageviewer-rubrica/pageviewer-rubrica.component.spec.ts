import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageviewerRubricaComponent } from './pageviewer-rubrica.component';

describe('PageviewerRubricaComponent', () => {
  let component: PageviewerRubricaComponent;
  let fixture: ComponentFixture<PageviewerRubricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageviewerRubricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageviewerRubricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
