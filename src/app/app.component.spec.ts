import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('App Component Testing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('', () => {
    // spyOn(statusService, 'checkedByod').and.returnValue(true);
    spyOn(component, 'search').and.callThrough();
    expect(component.search).toHaveBeenCalled();
  });
});
