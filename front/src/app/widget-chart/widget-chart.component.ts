import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {WidgetDatabase} from '../oop/widget-database.modules';
import {WidgetChart} from '../oop/widget-chart.modules';

const MAX_PART_PIE_CHART = 10;
const WIDGET_DATABASE = "WIDGET_DATABASE";
const WIDGET_CHART = "WIDGET_CHART";

 @Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent implements OnInit{
  @Input() widget : object;
  @Input() mode: number;

  @Output() editWidget = new EventEmitter();
  @Output() deleteWidget = new EventEmitter();

  //problem
  arrayColName = [];
  // arrayColName = [{col: data[0].department, qual: 1, perc: 0.0, drawed: 0.0, color: "", dasharray:""}];
  arrayColor = ['#d2d3d4', '#ce4b99', '#b1c94e', '#377bbc', '#ff751a', '#993300', '#a64dff', '#ffff4d', '	 #ff4d4d', '#330000'];
  finalColor = this.arrayColor[0];


  Editting = false;
  isData = true;
  isFullScreen = false;

 constructor(){

 }
  ngOnInit() {
    var self= this;

     self.getDistinctOfCol();
    
  }
  switchFullScreen(){
    var self = this;

    self.isFullScreen = !self.isFullScreen;
  }

  checkExitCol(colName, arrayColname){
    for(var i = 0; i < arrayColname.length; i++){
      if (colName === arrayColname[i].col){
        arrayColname[i].qual++;
        return true;
      }
    }
    return false;
  }

  getDistinctOfCol(){

    var self = this;

    var Data = self.widget['Data'];
    var meta = Data['meta'];
    var column = Data['column'];

    self.arrayColName = [];

    for(var i = 0; i < meta.length; i++)
    {
      if (self.checkExitCol(meta[i][column], self.arrayColName) === false){
        self.arrayColName.push({col: meta[i][column], qual: 1, perc: 0.0, drawed: 0.0, color:"", dasharray:""});
      }
    }
    
    var total = self.totalOfCol(self.arrayColName);
    
    var finalPercent = 100.0;

    for(var i = 0; i < self.arrayColName.length -1 ; i++){
      self.arrayColName[i].perc = Math.round(((self.arrayColName[i].qual / total)*100));

      finalPercent -= self.arrayColName[i].perc;
    }
    self.arrayColName[self.arrayColName.length - 1].perc = Math.round(finalPercent);

    if(self.arrayColName.length > 10)
    {
      return;
    }

    var drawed = 0;
    for(var i=0; i<self.arrayColName.length; i++){
      self.arrayColName[i].drawed = drawed;
      drawed += self.arrayColName[i].perc;
      self.arrayColName[i].color = self.arrayColor[i+1];
      self.arrayColName[i].dasharray = self.arrayColName[i].perc + ' ' + (100 - self.arrayColName[i].perc);
    }
    self.finalColor = self.arrayColor[self.arrayColName.length - 1];
  }

  processData(){


  }

  isGoodPieChart(){
    var self = this;

    var total = self.arrayColName.length;

    if (total > MAX_PART_PIE_CHART)
    {
      return false;
    }
    return true;
  }

  totalOfCol(arrayCol){
    var total = 0;

    for(var i = 0; i < arrayCol.length; i++){
      total += arrayCol[i].qual;
    }
    return total;
  }

  deleteWidgetAtChartCom(){
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
