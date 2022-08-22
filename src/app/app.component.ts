import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { WeatherInfo, WEATHERDATA } from './data';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  public weatheData: WeatherInfo[] = WEATHERDATA;
  public searchKey: string = '';
  public cityWeather1: WeatherInfo;
  public cityWeather: any = null;
  public isSearching: boolean = false;
  public subject: Subject<any> = new Subject();
  seachTimeout;

  public ngOnInit(): void {
    //way 2
    this.cityWeather = this.subject
      .pipe(
        debounceTime(500),
        map((searchText) => {
          console.log('***', searchText);
          const res = this.weatheData.find(
            (item) =>
              item.name.toLocaleLowerCase() === searchText.toLocaleLowerCase()
          );
          return res;
        })
      )
      .subscribe((res) => {
        this.cityWeather = res;
        console.log('***', this.cityWeather);
      });
  }
  public search(): void {
    // this.jsWay1();
    this.jsWay2();
  }
  public jsWay2(): void {
    console.log('this.searchKey', this.searchKey);
    this.subject.next(this.searchKey);
  }
  public jsWay1(): void {
    if (this.seachTimeout) {
      clearInterval(this.seachTimeout);
    }
    this.seachTimeout = setTimeout(() => {
      this.searchAction();
    }, 2000);
  }

  public searchAction(): void {
    console.log('searfcj', this.searchKey);
    this.cityWeather1 = this.weatheData.find(
      (item) =>
        item.name.toLocaleLowerCase() === this.searchKey.toLocaleLowerCase()
    );
    console.log('res', this.cityWeather);
  }
}
