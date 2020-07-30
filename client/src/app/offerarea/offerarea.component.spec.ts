import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferareaComponent } from './offerarea.component';

describe('OfferareaComponent', () => {
  let component: OfferareaComponent;
  let fixture: ComponentFixture<OfferareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
