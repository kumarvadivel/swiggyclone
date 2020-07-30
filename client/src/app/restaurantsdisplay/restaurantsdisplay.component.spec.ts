import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsdisplayComponent } from './restaurantsdisplay.component';

describe('RestaurantsdisplayComponent', () => {
  let component: RestaurantsdisplayComponent;
  let fixture: ComponentFixture<RestaurantsdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
