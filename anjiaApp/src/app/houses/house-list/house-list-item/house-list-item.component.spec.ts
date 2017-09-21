import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListItemComponent } from './house-list-item.component';

describe('HouseListItemComponent', () => {
  let component: HouseListItemComponent;
  let fixture: ComponentFixture<HouseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
