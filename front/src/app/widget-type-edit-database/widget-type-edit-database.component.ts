import { Component, OnInit, Input } from '@angular/core';

import Contact from '../database/Contact';
import Stock from '../database/Stock';

const SOURCE_CONTACT = "SOURCE_CONTACT";
const SOURCE_STOCK = "SOURCE_STOCK";

const WIDGET_DATABASE = "WIDGET_DATABASE";

@Component({
  selector: 'app-widget-type-edit-database',
  templateUrl: './widget-type-edit-database.component.html',
  styleUrls: ['./widget-type-edit-database.component.css']
})
export class WidgetTypeEditDatabaseComponent implements OnInit {
  
  @Input() Widget : object;
  @Input() isData: boolean;


  meta: object;
  datasourceName = "";
  listColumn = [];

  data =""; 
  constructor() { }

  ngOnInit(){
    var self = this;

    if(self.isData === true)
    {
      if (self.Widget["Type"] === WIDGET_DATABASE)
      {  
        var data = self.Widget["Data"];
        
        self.datasourceName = data["datasourceName"];
        self.meta = data["meta"];
        self.listColumn = data["listColumn"];
      }
      else{
        self.getInstance();
      }
    }
    else
    {
      self.getInstance();
    }
  }

  getInstance(){
    var self = this;

    self.datasourceName = SOURCE_CONTACT;
    self.meta = Contact;
    self.listColumn = Object.getOwnPropertyNames(Contact[0]);
  }

  getAllColumn(){
    var self = this;
    var leftColumnRaw = Object.getOwnPropertyNames(self.meta[0]);
    var lefColumn = [];
    for(var i=0; i < leftColumnRaw.length; i++){
      lefColumn.push({col: leftColumnRaw[i], id: "drag" + i});
    }
    console.log(lefColumn);
    return lefColumn;

  }
  changeDataSource(){
    var self = this;

    if (self.datasourceName === SOURCE_CONTACT)
    {
      self.meta = Contact;
      self.listColumn = Object.getOwnPropertyNames(Contact[0]);
    }
    else if (self.datasourceName === SOURCE_STOCK){
      self.meta = Stock;
      self.listColumn = Object.getOwnPropertyNames(Stock[0]);
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}
