import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

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
