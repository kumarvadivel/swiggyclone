import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcardComponent } from './foodcard.component';

describe('FoodcardComponent', () => {
  let component: FoodcardComponent;
  let fixture: ComponentFixture<FoodcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
