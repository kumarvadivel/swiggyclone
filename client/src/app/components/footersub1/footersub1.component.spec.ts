import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footersub1Component } from './footersub1.component';

describe('Footersub1Component', () => {
  let component: Footersub1Component;
  let fixture: ComponentFixture<Footersub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footersub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footersub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
