import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})

export class SecondPageComponent implements OnInit {
 myElement = document.getElementById('image1');

myImages=[
      './assets/images/img1.png',
      './assets/images/img3.png',
      './assets/images/img3.png',

];

  constructor() { }
  ngOnInit() {  
   
  }

}
