import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementContactComponent } from './element-contact.component';

describe('ElementContactComponent', () => {
  let component: ElementContactComponent;
  let fixture: ComponentFixture<ElementContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
