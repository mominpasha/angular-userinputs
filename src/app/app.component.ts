import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mousemsgs:string = "";
  keyboardmsgs:string = "";

  mouseEvent(event){
    this.mousemsgs = event.type;
    console.log(event);
  }

  keyboardEvent(event){
    this.keyboardmsgs = event.type + " - " + event.code;
    console.log(event);
  }

}
