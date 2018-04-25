import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Data from './data';


import {WidgetDatabase} from '../oop/widget-database.modules';
import {WidgetChart} from '../oop/widget-chart.modules';

const WIDGET_DATABASE = "WIDGET_DATABASE";
const WIDGET_CHART = "WIDGET_CHART";

@Component({
  selector: 'app-widget-database',
  templateUrl: './widget-database.component.html',
  styleUrls: ['./widget-database.component.css']
})
export class WidgetDatabaseComponent implements OnInit{
  @Input() widget : object;
  @Input() mode: number;

  @Output() editWidget = new EventEmitter();
  @Output() deleteWidget = new EventEmitter();
  
  page = 1;
  Editting = false;
  isData = true;
  isFullScreen = false;
  
  constructor(){

  }

  ngOnInit(){
  }

  switchFullScreen(){
    var self = this;

    console.log("click na");
    self.isFullScreen = !self.isFullScreen;

  }
  deleteWidgetAtDatabaseCom(){
    var self = this;
    
    self.deleteWidget.emit(self.widget)

  }

  switchPopUp(){
    var self = this;

    self.Editting = !self.Editting;
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
}
