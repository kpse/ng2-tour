import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {MailService} from "./mail.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'http://localhost:4200/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
