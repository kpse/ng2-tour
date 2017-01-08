import {Directive, HostBinding} from '@angular/core';
import {OnlineService} from "../services/online.service";

@Directive({
  selector: '[online]'
})
export class OnlineDirective {

  @HostBinding('disable') get disabled() {
    return this.service.online;
  }

  @HostBinding('class.offline') get offline() {
    return this.service.online;
  }

  constructor(private service: OnlineService) { }

}
