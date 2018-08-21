import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PageviewerComponent } from "./pageviewer/pageviewer.component";
import { CreaFatturaStepperComponent } from './crea-fattura-stepper/crea-fattura-stepper.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageviewerComponent,
    CreaFatturaStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
