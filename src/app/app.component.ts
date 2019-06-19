import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular8XAdminLTE3';

  listIndex = [
    {
      text: 'index1',
      path: '/index1'
    },
    {
      text: 'index2',
      path: '/index2'
    },
    {
      text: 'index3',
      path: '/index3'
    },
  ];
}
