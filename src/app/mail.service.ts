import {Injectable} from '@angular/core';

@Injectable()
export class MailService {

  messages = ['you got a new mail!',
    'your boss send you a mail!',
    'you lost many mails!']

  constructor() {
  }

}
