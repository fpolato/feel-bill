import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageviewerCreaFatturaComponent } from './pageviewer-crea-fattura/pageviewer-crea-fattura.component';
import { PageviewerRubricaComponent } from './pageviewer-rubrica/pageviewer-rubrica.component';
import { PageviewerArchivioComponent } from './pageviewer-archivio/pageviewer-archivio.component';

const routes: Routes = [
  { path: '', redirectTo: '/crea-fattura', pathMatch: 'full' },
  { path: 'crea-fattura', component: PageviewerCreaFatturaComponent },
  { path: 'rubrica', component: PageviewerRubricaComponent },
  { path: 'archivio', component: PageviewerArchivioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
