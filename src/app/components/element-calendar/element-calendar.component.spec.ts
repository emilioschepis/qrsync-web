import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCalendarComponent } from './element-calendar.component';

describe('ElementCalendarComponent', () => {
  let component: ElementCalendarComponent;
  let fixture: ComponentFixture<ElementCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
