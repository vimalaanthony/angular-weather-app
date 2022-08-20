import { Component, OnChanges, Input } from '@angular/core';
import { WeatherInfo } from '../data';
@Component({
  selector: 'my-weather-details',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss'],
})
export class WeatherDetailComponent implements OnChanges {
  @Input() weather: WeatherInfo;

  public ngOnChanges(): void {
    console.log('weather', this.weather);
  }
}
