import {Component, OnInit, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-focus-input',
  templateUrl: './focus-input.component.html',
  styleUrls: ['./focus-input.component.css']
})
export class FocusInputComponent implements OnInit {

  @ViewChild('myFocus') input;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(
      this.input.nativeElement,
      'focus'
    )
  }

}
