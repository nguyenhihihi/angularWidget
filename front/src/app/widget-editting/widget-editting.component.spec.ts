import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEdittingComponent } from './widget-editting.component';

describe('WidgetEdittingComponent', () => {
  let component: WidgetEdittingComponent;
  let fixture: ComponentFixture<WidgetEdittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEdittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEdittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
