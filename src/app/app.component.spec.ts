/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {MailService} from "./services/mail.service";
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {HomeComponent} from "./home/home.component";
import {FocusInputComponent} from "./focus-input/focus-input.component";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {LogService} from "./services/log-service.service";
import {API_URL} from "./app.tokens";
import {FirstDirective} from "./directives/first.directive";
import {BasicComponent} from "./basic/basic.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SimpleFormComponent,
        HomeComponent,
        FirstDirective,
        BasicComponent,
        FocusInputComponent
      ],
      imports: [FormsModule],
      providers: [
        {provide: 'mail', useClass: MailService},
        {provide: API_URL, useValue: 'api string'},
        {provide: 'log', useFactory: () => new LogService(true)}
      ]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [SimpleFormComponent],
      },
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works! api string');
  }));

  it('should render title in a h1 tag', (done) => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    var obs = Observable.of(1).delay(0);
    obs.subscribe(() => {
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div h1').textContent).toContain('app works!');
      done()
    });
  });
});
