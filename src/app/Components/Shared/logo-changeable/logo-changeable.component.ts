import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

const srcBase = '/assets/';

@Component({
  selector: 'app-logo-changeable',
  templateUrl: './logo-changeable.component.html',
  styleUrls: ['./logo-changeable.component.scss']
})
export class LogoChangeableComponent implements OnInit {
  logoSrc = srcBase + 'attendfy.svg';
  height = 50;
  constructor() { }

  ngOnInit(): void {
  }

  @Input('height') set setHeight(val: number) {
    this.height = val;
  };

  @Input('type') set setType(type: string) {
    switch (type) {
      case 'small':
        this.logoSrc = srcBase + 'attendfy.svg';
        break;
      case 'full':
        this.logoSrc = srcBase + 'attendfy.svg';
        break;
      case 'full-dark':
        this.logoSrc = srcBase + 'attendfy.svg';
        break;
    }
  };
}
