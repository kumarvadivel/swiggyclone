import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesub2Component } from './homesub2.component';

describe('Homesub2Component', () => {
  let component: Homesub2Component;
  let fixture: ComponentFixture<Homesub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homesub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homesub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
