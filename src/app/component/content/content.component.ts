import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  @Input('Type') set _setHeadder(value) {
    if (value) {
      this.type = value;
    }
  }

  type;

  constructor() { }

  ngOnInit() {
  }

}
