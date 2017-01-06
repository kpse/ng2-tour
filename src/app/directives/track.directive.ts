import {Directive, Input, HostListener} from '@angular/core';
import {TrackingService} from "../services/tracking.service";

@Directive({
  selector: '[track]'
})
export class TrackDirective {

  @Input() track;

  @HostListener('click') onClick() {
    console.log(`track: ${this.track}`);
    this.traking.log({event: 'click', message: this.track})
  }

  @HostListener('mouseover') onMouseOver() {
    console.log(`track: ${this.track}`);
    this.traking.log({event: 'mouseOver', message: this.track})
  }

  constructor(private traking: TrackingService) { }

}
