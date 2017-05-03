import { Component, OnInit } from '@angular/core';
import { StickyNavDirective } from './nav.sticky.directive';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [StickyNavDirective]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
