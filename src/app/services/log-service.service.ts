import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor(private enabled: boolean) { }

  log(info) {
    if(this.enabled) {
      console.log('from app logger', info);
    }
  }
}
