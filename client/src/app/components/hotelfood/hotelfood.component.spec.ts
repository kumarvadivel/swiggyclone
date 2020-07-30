import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelfoodComponent } from './hotelfood.component';

describe('HotelfoodComponent', () => {
  let component: HotelfoodComponent;
  let fixture: ComponentFixture<HotelfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
