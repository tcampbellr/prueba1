import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
  pageTitle = 'conversion';
  image = 'rocket.svg';
  pageIcon = `../../../assets/img/${this.image}`;

  constructor() { }

  ngOnInit() {
  }

}
