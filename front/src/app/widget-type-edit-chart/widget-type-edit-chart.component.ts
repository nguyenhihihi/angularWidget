import { Component, OnInit, Input } from '@angular/core';

import Contact from '../database/Contact';
import Stock from '../database/Stock';

const SOURCE_CONTACT = "SOURCE_CONTACT";
const SOURCE_STOCK = "SOURCE_STOCK";
const WIDGET_CHART = "WIDGET_CHART";


@Component({
  selector: 'app-widget-type-edit-chart',
  templateUrl: './widget-type-edit-chart.component.html',
  styleUrls: ['./widget-type-edit-chart.component.css']
})
export class WidgetTypeEditChartComponent implements OnInit {

  @Input() Widget : object;
  @Input() isData: boolean;

  meta: object;
  datasourceName = "";
  column = "";

  listcolumn = [];

  constructor() { }

  ngOnInit() {
    var self = this;

    if (self.isData === true)
    {
      if (self.Widget["Type"] === WIDGET_CHART)
        {
          var data = self.Widget["Data"];

          self.datasourceName = data["datasourceName"];
          self.meta = data.meta;
          self.listcolumn = Object.getOwnPropertyNames(self.meta[0]);
          self.column = data["column"];
        }
        else
        {
          self.getInstance();
        }
    }
    else{
      self.getInstance();
    
    }

  }

  getInstance(){
    var self = this;
    self.datasourceName = SOURCE_CONTACT;
    self.meta = Contact;

    self.listcolumn = Object.getOwnPropertyNames(Contact[0]);
    self.column = self.listcolumn[0];
  }

  changeDataSource(){
    var self = this;
    if (self.datasourceName === SOURCE_CONTACT){
      self.meta = Contact;
      self.listcolumn = Object.getOwnPropertyNames(Contact[0]);
      self.column = self.listcolumn[0];
    }
    else if (self.datasourceName === SOURCE_STOCK){
      self.meta = Stock;
      self.listcolumn = Object.getOwnPropertyNames(Stock[0]);
      self.column = self.listcolumn[0];
    }
  }
}
