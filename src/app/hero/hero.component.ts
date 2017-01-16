import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map"

@Component({
  selector: 'app-hero',
  template: `
    <p>
      I'm the hero No. {{id | async}}
    </p>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  id;

  constructor(private route: ActivatedRoute) {
    this.id = route.params.map((p:any) => p.id)
  }

  ngOnInit() {
  }

}
