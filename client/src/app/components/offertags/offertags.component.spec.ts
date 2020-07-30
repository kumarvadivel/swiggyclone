import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertagsComponent } from './offertags.component';

describe('OffertagsComponent', () => {
  let component: OffertagsComponent;
  let fixture: ComponentFixture<OffertagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
