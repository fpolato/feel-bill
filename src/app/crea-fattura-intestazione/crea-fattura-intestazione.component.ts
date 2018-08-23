import { Component, OnInit } from '@angular/core';

import { Fattura } from '../fattura'
import { TipoFattura } from '../tipo-fattura';

@Component({
  selector: 'app-crea-fattura-intestazione',
  templateUrl: './crea-fattura-intestazione.component.html',
  styleUrls: ['./crea-fattura-intestazione.component.css']
})
export class CreaFatturaIntestazioneComponent implements OnInit {

  //fattura = new Fattura("A01", 1, 1, "2018-08-23", "Trattoria da Saverio", "Via Europa, 7, 35040, Sant'Urbano (PD)", "0123456789", "fabio.4f@gmail.com", "STD");
  fattura = new Fattura("A01", 1, 1, null, null, null, null, null, TipoFattura.PRE);
  
  submitted = false;
  
  constructor() {
    let today = new Date();
    let dayString = (today.getDate() < 10) ? "0" + today.getDate() : today.getDate();
    let monthString = ((today.getMonth() + 1) < 10) ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
    let todayString = today.getFullYear() + "-" + monthString + "-" + dayString;
    this.fattura.data = todayString;
  }
  
  ngOnInit() {
    
  }
  
  onSubmit() {
    this.submitted = true;
  }
  
}
