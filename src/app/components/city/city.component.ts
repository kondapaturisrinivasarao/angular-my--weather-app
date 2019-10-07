import { Component, OnInit, Input } from '@angular/core';
import { IWeatherData } from '../../models/IWeatherData.interface';
import { CommonModule } from '@angular/common';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  /*
    CHALLENGE
     - Take the city details from app.component.html into "cityDetails"
     - display the city details in the template
  */

 @Input() cityDetails: IWeatherData;
  i;
  constructor() {

   }

  ngOnInit() {

  }

}
