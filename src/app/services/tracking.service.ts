import { Injectable } from '@angular/core';

@Injectable()
export class TrackingService {

  logs = [];

  constructor() { }

  log(message){
    this.logs.push(message);
    console.log(this.logs);
  }
}
