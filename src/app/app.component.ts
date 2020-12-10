import { Component,ViewChild, AfterViewInit,ElementRef} from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  
   @ViewChild(ChildComponent) child; // get child reference 
   @ViewChild('srcKey') sk: ElementRef; // get parent template reference 

   message:string;

    ngAfterViewInit() {
      this.message = this.child.message; // show message from child
      this.sk.nativeElement.innerHTML = this.child.srcKeyInput.nativeElement.value; // update the parent template reference with child template reference value
    }
  
}
