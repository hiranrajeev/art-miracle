import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  imageObject: Array<object> = [{
    thumbImage: 'assets/services/s1.png',
    alt: 'Family Sketch'
  }, {
    thumbImage:  'assets/services/s2.png', 
    alt: 'Caricature Art' 
  },
  {
    thumbImage:  'assets/services/s3.png',
    alt: 'Single Portrait',
  }, {
    thumbImage:  'assets/services/s4.png',
    alt: 'Couple Portrait' 
  },
  {
    thumbImage:  'assets/services/s5.png', 
    alt: 'Save the Date'
  },
  {
    thumbImage:  'assets/services/s6.png', 
    alt: 'Dream to Illustration' 
  },
  {
    thumbImage:  'assets/services/s7.png', 
    alt: 'Theme Based Art' 
  }
  ];

}
