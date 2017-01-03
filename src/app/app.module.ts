import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {SimpleFormComponent} from "./simple-form/simple-form.component";
import {HomeComponent} from "./home/home.component";
import {MailService} from "./services/mail.service";
import { FocusInputComponent } from './focus-input/focus-input.component';
import {LogService} from "./services/log-service.service";
import {ConsoleService} from "./services/console.service";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HomeComponent,
    FocusInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [SimpleFormComponent],
  providers: [{provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'http://localhost:4200/'},
    ConsoleService,
    {provide: 'log',
      useFactory: (consoleService) => new LogService(consoleService, true),
      deps: [ConsoleService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
