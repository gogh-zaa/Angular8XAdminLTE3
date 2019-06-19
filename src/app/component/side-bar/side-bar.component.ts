import { Router } from '@angular/router';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  @Input('Type') set _setHeadder(value) {
    if (value) {
      this.type = value;
    }
  }

  type;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  test(path) {
    this.router.navigate([path]);
  }

}
