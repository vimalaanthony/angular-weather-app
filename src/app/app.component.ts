import { Component, ViewEncapsulation } from '@angular/core';
import { WeatherInfo, WEATHERDATA } from './data';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  name = 'Angular';
  public weatheData: WeatherInfo[] = WEATHERDATA;
  public searchKey: string = 'denver';
  public cityWeather: WeatherInfo = WEATHERDATA[0];
  public isSearching: boolean = false;

  public search(): void {
    console.log('searfcj', this.searchKey);
    console.log('searfcj', this.weatheData);
    this.cityWeather = this.weatheData.find(
      (item) =>
        item.name.toLocaleLowerCase() === this.searchKey.toLocaleLowerCase()
    );
    console.log(this.cityWeather);
  }
}
