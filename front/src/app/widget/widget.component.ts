import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {WidgetDatabase} from '../oop/widget-database.modules';
import {WidgetChart} from '../oop/widget-chart.modules';

const WIDGET_DATABASE = "WIDGET_DATABASE";
const WIDGET_CHART = "WIDGET_CHART";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() widget : object;
  @Input() mode: number;

  @Output() editWidget = new EventEmitter();
  @Output() deleteWidget = new EventEmitter();

  Editting = false;
  isData = false;

  isFullScreen = false;
  
  ngOnInit() {
  }

  switchFullScreen(){
    var self = this;

    self.isFullScreen = !self.isFullScreen;
  }

  saveEdit(Widget){
    var self = this;
    var widget : object;
  
    if (Widget["type"] === WIDGET_DATABASE ){
      widget = new WidgetDatabase(Widget["data"], self.widget["Id"], Widget["name"], Widget["type"], Widget["width"], Widget["height"]);
    }
    else{
      widget = new WidgetChart(Widget["data"], self.widget["Id"], Widget["name"], Widget["type"], Widget["width"], Widget["height"]);
    }

    self.editWidget.emit(widget);
  }

  switchPopUp(){
    var self = this;

    self.Editting = !self.Editting;
  }

  deleteWidgetAtWidgetCom(){
    var self = this;
    self.deleteWidget.emit(self.widget)

  }
}
