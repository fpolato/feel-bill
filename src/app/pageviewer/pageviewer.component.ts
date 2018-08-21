import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageviewer',
  templateUrl: './pageviewer.component.html',
  styleUrls: ['./pageviewer.component.css']
})
export class PageviewerComponent implements OnInit {

  title = 'Titolo Pagina';

  constructor() { }

  ngOnInit() {
  }

}
