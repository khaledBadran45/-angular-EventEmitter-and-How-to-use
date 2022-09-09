import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Eventemitter';
constructor(){
  setTimeout(() => {
  }, 3100);
}
  method(e: any) {
    this.title = e;
  }
}
