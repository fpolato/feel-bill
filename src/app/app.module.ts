import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatGridListModule,
  MatCardModule, 
  MatMenuModule, 
  MatIconModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatStepperModule,
  MatFormFieldModule, 
  MatInputModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PageviewerComponent } from "./pageviewer/pageviewer.component";
import { CreaFatturaStepperComponent } from './crea-fattura-stepper/crea-fattura-stepper.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageviewerRubricaComponent } from './pageviewer-rubrica/pageviewer-rubrica.component';
import { PageviewerCreaFatturaComponent } from './pageviewer-crea-fattura/pageviewer-crea-fattura.component';
import { PageviewerArchivioComponent } from './pageviewer-archivio/pageviewer-archivio.component';
import { CreaFatturaIntestazioneComponent } from './crea-fattura-intestazione/crea-fattura-intestazione.component';
import { CreaFatturaProdottiComponent } from './crea-fattura-prodotti/crea-fattura-prodotti.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageviewerComponent,
    CreaFatturaStepperComponent,
    PageviewerRubricaComponent,
    PageviewerCreaFatturaComponent,
    PageviewerArchivioComponent,
    CreaFatturaIntestazioneComponent,
    CreaFatturaProdottiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatDividerModule,
    LayoutModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
