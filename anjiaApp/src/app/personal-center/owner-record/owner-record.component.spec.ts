import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRecordComponent } from './owner-record.component';

describe('OwnerRecordComponent', () => {
  let component: OwnerRecordComponent;
  let fixture: ComponentFixture<OwnerRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
