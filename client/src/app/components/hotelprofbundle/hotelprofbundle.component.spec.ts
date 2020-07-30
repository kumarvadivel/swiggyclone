import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelprofbundleComponent } from './hotelprofbundle.component';

describe('HotelprofbundleComponent', () => {
  let component: HotelprofbundleComponent;
  let fixture: ComponentFixture<HotelprofbundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelprofbundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelprofbundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
