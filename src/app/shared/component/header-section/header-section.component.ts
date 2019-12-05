import { Component, OnInit } from '@angular/core';
declare const require: any;
@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  logo = require('./../../../../assets/img/logo.svg');
  bag = require('./../../../../assets/img/bag.svg');
  user = require('./../../../../assets/img/user.svg');
  menuBtn = require('./../../../../assets/img/menuBtn.svg');
  menImg = require('./../../../../assets/img/men.png');
  womenImg = require('./../../../../assets/img/women.png');
  sliderPushClass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // Silder Toggle
  onPushToggleSilder() {
    this.sliderPushClass = !this.sliderPushClass;
  }

}
