import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() data: any;
  @Input() title: string;

  constructor() { }
  
  ngOnInit() {}
  slideOpts = {
    slidesPerView: 3.2,
    speed: 400
  };
}
