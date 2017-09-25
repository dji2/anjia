import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotHousesComponent } from './hot-houses.component';

describe('HotHousesComponent', () => {
  let component: HotHousesComponent;
  let fixture: ComponentFixture<HotHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
