import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaFatturaStepperComponent } from './crea-fattura-stepper/crea-fattura-stepper.component';

const routes: Routes = [
  { path: '', redirectTo: '/crea-fattura', pathMatch: 'full' },
  { path: 'crea-fattura', component: CreaFatturaStepperComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
