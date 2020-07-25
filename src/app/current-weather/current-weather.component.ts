import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces'

import { WeatherService } from '../weather/weather.service' 

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) { 
    this.current = {
      city: 'Montería',
      country: 'CO',
      date: new Date().getMilliseconds(),

      image: 'assets/img/sunny.svg',
      temperature: 50,

      description: 'sunny'
    } as ICurrentWeather;
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Montería', 'CO')
      .subscribe((data) => this.current = data);
  }

}
