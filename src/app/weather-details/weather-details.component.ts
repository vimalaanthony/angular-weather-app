import { Component, OnChanges, Input } from '@angular/core';
import { WeatherInfo } from '../data';
@Component({
  selector: 'my-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailComponent implements OnChanges {
  @Input() cityWeather: WeatherInfo;

  public ngOnChanges(): void {
    console.log('weather', this.cityWeather);
  }
}
