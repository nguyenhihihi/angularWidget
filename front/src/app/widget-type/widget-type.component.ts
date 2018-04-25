import { Component, OnInit, Input, ViewChild } from '@angular/core';
const WIDGET_CHART = 'WIDGET_CHART';
const WIDGET_DATABASE = 'WIDGET_DATABASE';

import {WidgetTypeEditDatabaseComponent} from '../widget-type-edit-database/widget-type-edit-database.component';
import {WidgetTypeEditChartComponent} from '../widget-type-edit-chart/widget-type-edit-chart.component';

@Component({
  selector: 'app-widget-type',
  templateUrl: './widget-type.component.html',
  styleUrls: ['./widget-type.component.css']
})
export class WidgetTypeComponent implements OnInit {
  @Input() Type : string;
  @Input() isData: boolean;
  @Input() Widget: object;
  
  @ViewChild(WidgetTypeEditDatabaseComponent)
  WidgetDatabaseMeta: WidgetTypeComponent;

  @ViewChild(WidgetTypeEditChartComponent)
  WidgetChartMeta: WidgetTypeEditChartComponent;

  constructor() { }

  ngOnInit() {
    var self = this;

    if (self.Type !=  WIDGET_DATABASE && self.Type != WIDGET_CHART) 
    {
      self.Type = WIDGET_DATABASE;
    }
  }
}
