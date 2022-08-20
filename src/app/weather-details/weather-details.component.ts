import {
  Component,
  OnChanges,
  Input,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { WeatherInfo } from '../data';
@Component({
  selector: 'my-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailComponent implements OnChanges, OnInit {
  @Input() cityWeather: WeatherInfo = null;
  // @Input() isSearching: boolean;

  public ngOnInit(): void {
    console.log('weather Onint', this.cityWeather);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['weather']) {
      console.log('weather', this.cityWeather);
    }
  }
}
