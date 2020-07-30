import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelprofdataComponent } from './hotelprofdata.component';

describe('HotelprofdataComponent', () => {
  let component: HotelprofdataComponent;
  let fixture: ComponentFixture<HotelprofdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelprofdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelprofdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
