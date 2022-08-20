import { Component } from '@angular/core';
import { WeatherInfo, WEATHERDATA } from './data';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  public weatheData: WeatherInfo[] = WEATHERDATA;
  public searchKey: string;

  public search(): void {
    console.log('searfcj', this.searchKey);
    console.log('searfcj', this.weatheData);
    const cityWeather = this.weatheData.find(
      (item) => item.name === this.searchKey
    );
    console.log(cityWeather);
  }
}
