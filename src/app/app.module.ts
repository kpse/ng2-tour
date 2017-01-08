import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {SimpleFormComponent} from "./simple-form/simple-form.component";
import {HomeComponent} from "./home/home.component";
import {MailService} from "./services/mail.service";
import {FocusInputComponent} from './focus-input/focus-input.component';
import {LogService} from "./services/log-service.service";
import {ConsoleService} from "./services/console.service";
import {THIRD_PARTY_PROVIDERS} from "./third-party";
import {API_URL} from "./app.tokens";
import {FirstDirective} from './directives/first.directive';
import {BasicComponent} from './basic/basic.component';
import {TrackDirective} from './directives/track.directive';
import {TrackingService} from "./services/tracking.service";
import {OnlineDirective} from './directives/online.directive';
import {OnlineService} from "./services/online.service";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HomeComponent,
    FocusInputComponent,
    FirstDirective,
    BasicComponent,
    TrackDirective,
    OnlineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [SimpleFormComponent],
  providers: [{provide: 'mail', useClass: MailService},
    {provide: API_URL, useValue: 'http://localhost:4200/'},
    ConsoleService,
    TrackingService,
    OnlineService,
    {
      provide: 'log',
      useFactory: (consoleService) => new LogService(consoleService, true),
      deps: [ConsoleService]
    },
    THIRD_PARTY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
