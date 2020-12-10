import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Below Native input DOM element will be referenced from within parent using @ViewChild</h3>
  <input #sourceKeyInput placeholder="Source Key" value="123456" disabled>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ViewChild('sourceKeyInput') srcKeyInput: ElementRef;
  message = 'Message from child!';

  constructor() { }

}