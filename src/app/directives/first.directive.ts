import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor() { }
  @HostBinding() innerText = `this is the first directive`;
}
