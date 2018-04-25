import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTypeEditChartComponent } from './widget-type-edit-chart.component';

describe('WidgetTypeEditChartComponent', () => {
  let component: WidgetTypeEditChartComponent;
  let fixture: ComponentFixture<WidgetTypeEditChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTypeEditChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTypeEditChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
