import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microfrontend_base';
  url1 = 'http://localhost:4201/microfrontend_01.js';
  url2 = 'http://localhost:4202/microfrontend_02.js';
}
