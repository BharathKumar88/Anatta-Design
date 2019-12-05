import { Component, OnInit } from '@angular/core';
declare const require: any;
@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {
  strip = require('./../../../../assets/img/features-strip.svg');
  searchImg = require('./../../../../assets/img/searchImg.svg');
  instagram = require('./../../../../assets/img/instagram.svg');
  fb = require('./../../../../assets/img/facebook.svg');
  menWomen = [{name:'OCA Low'}, {name : 'OCA High'}, {name:'CATIBA Low'},{name:'CATIBA high'}];
  support = [{name:'FAQ'}, {name : 'Returns'}, {name:'Live Chat'}];
  about = [{name:'Mission'}, {name : 'Vision'}, {name:'Future'}];
  stores = [{name:'Find Near You'}, {name : 'Register'}];
  constructor() { }

  ngOnInit() {
  }

}
