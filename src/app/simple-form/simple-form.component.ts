import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild} from "@angular/core";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;
  @Input() message;

  @ViewChild('myInput') input;

  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.input);
  }

}
