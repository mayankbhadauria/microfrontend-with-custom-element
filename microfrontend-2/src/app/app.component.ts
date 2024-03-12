import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'microfrontend_02';
  message: any = [];
  sendmsg: string = '';

  sendData(msg: string) {
    const event = new CustomEvent('event2', {detail: msg});
    console.log(event)
    dispatchEvent(event);
    this.sendmsg= '';
  }

  ngOnInit() {

    fromEvent(window, 'event1').subscribe((event: any) => {
      console.log(event);
      this.message.push(event.detail);
    }); 

  }
  
}
