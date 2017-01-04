import {Component, Inject} from "@angular/core";
import {API_URL} from "./app.tokens";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `app works! ${this.api}`;

  constructor(@Inject('mail') private mail,
              @Inject(API_URL) private api,
              @Inject('log') private logger) {
  }

  onUpdate(id, text) {
    this.logger.log(`onUpdate: ${id}, ${text}`);
    this.mail.update(id, text)
  }
}
