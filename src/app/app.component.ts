import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  title = 'data-binding-app';
  counter:number = 0;
  counter1:number =0;

  hide:boolean = true;
  onButtonClick(){
    console.log("Button clicked");
    this.counter++;
    }
    onDblClick(){
      console.log("Image double clicked");
      if(this.hide == true)
      {
        this.hide = false;
       }    
       else{
         this.hide = true;
       }  
     // this.counter1++;
    }
}

