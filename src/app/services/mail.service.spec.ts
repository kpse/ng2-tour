/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailService } from './mail.service';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailService]
    });
  });

  it('should provide messages', inject([MailService], (service: MailService) => {
    expect(service.messages.length).toBe(3);
  }));

  it('should be able to update message', inject([MailService], (service: MailService) => {
    service.update(0, 'updated');
    expect(service.messages[0].text).toBe('updated');
  }));
});
