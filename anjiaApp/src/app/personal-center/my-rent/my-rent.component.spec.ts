import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentComponent } from './my-rent.component';

describe('MyRentComponent', () => {
  let component: MyRentComponent;
  let fixture: ComponentFixture<MyRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
