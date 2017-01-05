import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[first]'
})
export class FirstDirective {

  @Input() first;
  @HostBinding() get innerText() {
    return this.first;
  }

  constructor() { }
}
