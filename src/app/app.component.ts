import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home ', url: 'home', icon: 'home' },
    { title: 'Lista', url: 'lista', icon: 'menu' },
    { title: 'Clima', url: 'ubicacion', icon: 'location' },
    { title: 'conversion ', url: 'conversion', icon: 'cash' },
  ];
 
}
