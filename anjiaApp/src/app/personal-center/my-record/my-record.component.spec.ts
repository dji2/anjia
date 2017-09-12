import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecordComponent } from './my-record.component';

describe('MyRecordComponent', () => {
  let component: MyRecordComponent;
  let fixture: ComponentFixture<MyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
