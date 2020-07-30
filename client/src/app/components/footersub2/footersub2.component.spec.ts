import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footersub2Component } from './footersub2.component';

describe('Footersub2Component', () => {
  let component: Footersub2Component;
  let fixture: ComponentFixture<Footersub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footersub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footersub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
