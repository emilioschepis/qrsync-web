import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementActionsComponent } from './element-actions.component';

describe('ElementActionsComponent', () => {
  let component: ElementActionsComponent;
  let fixture: ComponentFixture<ElementActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
