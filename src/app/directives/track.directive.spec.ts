/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TrackDirective } from './track.directive';
import {TrackingService} from "../services/tracking.service";

describe('TrackDirective', () => {
  it('should create an instance', () => {
    let directive = new TrackDirective(new TrackingService());
    expect(directive).toBeTruthy();
  });
});
