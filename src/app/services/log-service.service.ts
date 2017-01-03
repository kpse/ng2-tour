import { Injectable } from '@angular/core';
import {ConsoleService} from "./console.service";

@Injectable()
export class LogService {

  constructor(private consoleService: ConsoleService, private enabled: boolean) { }

  log(info) {
    if(this.enabled) {
      this.consoleService.log(`from app logger ${info}`);
    }
  }
}
