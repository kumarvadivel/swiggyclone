import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sitefooter3Component } from './sitefooter3.component';

describe('Sitefooter3Component', () => {
  let component: Sitefooter3Component;
  let fixture: ComponentFixture<Sitefooter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sitefooter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sitefooter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
