import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageviewerArchivioComponent } from './pageviewer-archivio.component';

describe('PageviewerArchivioComponent', () => {
  let component: PageviewerArchivioComponent;
  let fixture: ComponentFixture<PageviewerArchivioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageviewerArchivioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageviewerArchivioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
