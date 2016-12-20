import {Component, Inject} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(@Inject('mail') private mail,
              @Inject('api') private api) {
  }

  onUpdate(id, text) {
    console.log('onUpdate', id, text);
    this.mail.update(id, text)
  }
}
