import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
weather =[]
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&APPID=8193a03092edda0547c77edb5a23d42f')
     .subscribe(res=>{
      console.log(res);
      this.weather = res.results
     })
  }

}
