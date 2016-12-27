/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {MailService} from "./services/mail.service";
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {HomeComponent} from "./home/home.component";
import {FocusInputComponent} from "./focus-input/focus-input.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SimpleFormComponent,
        HomeComponent,
        FocusInputComponent
      ],
      imports: [ FormsModule ],
      providers: [{provide: 'mail', useClass: MailService},
        {provide: 'api', useValue: 'api string'}],
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
    expect(app.title).toEqual('app works!');
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
