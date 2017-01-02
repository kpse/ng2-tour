import {Component, Inject} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(@Inject('mail') private mail,
              @Inject('api') private api,
              @Inject('log') private logger) {
  }

  onUpdate(id, text) {
    this.logger.log(`onUpdate: ${id}, ${text}`);
    this.mail.update(id, text)
  }
}
