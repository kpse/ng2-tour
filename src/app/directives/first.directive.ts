import {Directive, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[first]'
})
export class FirstDirective {

  @Input() first;
  @HostBinding() get innerText() {
    return this.first;
  }

  @HostListener('click', ['$event']) onClick(event) {
    console.log(`on clicking in directive event: ${event}`);
    this.first = event;
  }

  constructor() { }
}
