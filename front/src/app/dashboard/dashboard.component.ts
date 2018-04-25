import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {Widget} from '../oop/widget.modules';
import {WidgetDatabase} from '../oop/widget-database.modules';
import {WidgetChart} from '../oop/widget-chart.modules';

import {WidgetComponent} from '../widget/widget.component';
import {WidgetDatabaseComponent} from '../widget-database/widget-database.component';
import {WidgetChartComponent} from '../widget-chart/widget-chart.component';
import { MaxLengthValidator } from '@angular/forms';

import Contact from '../database/Contact';

const VIEW_MODE = 1;
const EDIT_MODE = 2;
const headers = new Headers({'Content-Type': 'application/json'});
const url = "http://localhost:3000/";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  mode = VIEW_MODE;

  ListWidget: Array<Widget> = [];

  k = {datasourceName: "SOURCE_CONTACT",
      listColumn: [Object.getOwnPropertyNames(Contact[0])[0], Object.getOwnPropertyNames(Contact[0])[1]],
      meta: Contact
  };

  k2 = {datasourceName: "SOURCE_CONTACT",
  listColumn: Object.getOwnPropertyNames(Contact[0]),
  meta: Contact,
  column: "department"
};


  data = new WidgetDatabase(this.k, 1, "mot", "aa", 100.0, 100.0);
  data2 = new WidgetChart(this.k2, 2 , "hai", "aa", 100.0, 100.0);
  data3 = new Widget(3);
  
  constructor(private http: Http) { }

  ngOnInit() {
    // this.ListWidget.push(this.data);
    // this.ListWidget.push(this.data2);
    // this.ListWidget.push(this.data3);  
   
    this.readDataFromFile();
    
  }

  switchMode(){
    var self = this;
    var nullWidget = new Widget();

    if (self.mode === VIEW_MODE)
    {
     self.mode = EDIT_MODE; 

     if (self.ListWidget.length === 0){
            self.ListWidget.push(nullWidget);
     }
     else if (self.ListWidget.length > 0 || self.ListWidget[self.ListWidget.length -1].Type != "WIDGET_NULL"){
        self.ListWidget.push(nullWidget);
     }
    }
    else if (self.mode === EDIT_MODE)
    {
      self.mode = VIEW_MODE;
      if (self.ListWidget.length > 0 || self.ListWidget[self.ListWidget.length -1].Type === "WIDGET_NULL"){
        self.ListWidget.pop();
     }

    }
    
  }

  findIndex(Widget){
    var self = this;
    var resultIndex = -1;

    for(var i = 0; i < self.ListWidget.length; i++){
      if (Widget.Id == self.ListWidget[i].Id){
        resultIndex = i;
        break;
      }
    }
    return resultIndex;
  }

  getAnIndex(){
    var self = this;

    if (self.ListWidget.length === 0)
    {
      return 0;
    }

    var maxIndex = self.ListWidget[0].Id;

    for(var i = 1; i < self.ListWidget.length; i++){
      if (self.ListWidget[i].Id > maxIndex){
        maxIndex = self.ListWidget[i].Id;
      }
    }
    return ++maxIndex;
  }

  addAWidget(){
    var self = this;
    var newWidget = new Widget();

    newWidget.setID(self.getAnIndex());
    self.ListWidget.push(newWidget);
  }
  
  editWidget(Widget){
    var self = this;
    var index = self.findIndex(Widget);

    self.ListWidget[index] = Widget;

    if (index === self.ListWidget.length -1)
    {
      self.addAWidget();
    }

    self.writeDataToFile();
  }

  deleteWidget(widget){
    var self = this;
    var index = this.findIndex(widget);
    var textConfirm = `Do you want to delete `+ widget.Name +` widget?`

    var r =  window.confirm(textConfirm);

    if (r == false)
    {
        return;
    }

    self.ListWidget.splice(index, 1);

    self.writeDataToFile();
  }

  async readDataFromFile(){
    var self = this;

    var widgetList = [];
    
    await self.http.get(url)
              .toPromise()
              .then( res => res.json())
              .then(resJson => widgetList = resJson );

    if (widgetList.length === 0){
      return;
    }

    for(var i = 0; i < widgetList.length; i++){

      if (widgetList[i]["Type"] === "WIDGET_DATABASE"){
        self.ListWidget.push(new WidgetDatabase(widgetList[i]["Data"], self.getAnIndex(), widgetList[i]["Name"], widgetList[i]["Type"], widgetList[i]["Width"], widgetList[i]["Height"]));
      }
      else if (widgetList[i]["Type"] === "WIDGET_CHART"){
        self.ListWidget.push(new WidgetChart(widgetList[i]["Data"], self.getAnIndex(), widgetList[i]["Name"], widgetList[i]["Type"], widgetList[i]["Width"], widgetList[i]["Height"]));
      }
      else if (widgetList[i]["Type"] === "WIDGET_NULL"){
        self.ListWidget.push(new Widget(self.getAnIndex()));
      }    
    }
  }

  writeDataToFile(){
    var self = this;
    var widgetWithoutNull = [];

    for(var i = 0; i < self.ListWidget.length; i++){
      if(self.ListWidget[i].Type != "WIDGET_NULL")
      {
        widgetWithoutNull.push(self.ListWidget[i]);
      }
    }
    var data = JSON.stringify(widgetWithoutNull);
    self.http.post(url, data, {headers})
    .toPromise()
    .then(res => res.text())
    .then(resText => console.log(resText));
  }

}
