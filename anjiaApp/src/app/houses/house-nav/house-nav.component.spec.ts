import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseNavComponent } from './house-nav.component';

describe('HouseNavComponent', () => {
  let component: HouseNavComponent;
  let fixture: ComponentFixture<HouseNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
