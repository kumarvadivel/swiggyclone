import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesub3Component } from './homesub3.component';

describe('Homesub3Component', () => {
  let component: Homesub3Component;
  let fixture: ComponentFixture<Homesub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homesub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homesub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
