import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pageviewer',
  templateUrl: './pageviewer.component.html',
  styleUrls: ['./pageviewer.component.css']
})
export class PageviewerComponent implements OnInit {

  @Input() title: string;

  //title = 'Titolo Pagina';

  constructor() { }

  ngOnInit() {
  }

}
