import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: '#c9f731',
      })),
      state('active', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
    trigger('movePanel', [
      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ]),

    trigger('focusPan', [
      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: '#d27b3c',
      })),
      state('active', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),

    trigger('movePan', [
      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateX(-400px)', offset: 0}),
          style({opacity: 1, transform: 'translateX(25px)', offset: .75}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1}),
        ]))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  state = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
