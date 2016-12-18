import {Injectable} from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: 'you got a new mail!'},
    {id: 1, text: 'your boss send you a mail!'},
    {id: 2, text: 'you lost many mails!'}
  ];

  update(id, text) {
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m)
  }

  constructor() {
  }

}
