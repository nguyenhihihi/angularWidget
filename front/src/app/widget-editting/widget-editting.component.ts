import { Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { WidgetTypeComponent } from '../widget-type/widget-type.component';

const WIDGET_DATABASE = 'WIDGET_DATABASE';
const WIDGET_CHART = 'WIDGET_CHART';

@Component({
  selector: 'app-widget-editting',
  templateUrl: './widget-editting.component.html',
  styleUrls: ['./widget-editting.component.css']
})
export class WidgetEdittingComponent implements OnInit {

  @Input() Type : string;
  @Input() Widget : object;
  @Input() isData: boolean;


  @Output() closePopUp = new EventEmitter();
  @Output() saveEdit = new EventEmitter();

  @ViewChild(WidgetTypeComponent)
  WidgetTypeMeta: WidgetTypeComponent;

  newTitle = "";
  newWidth = 0;
  newHeight = 0;

  //data of type widget, view child

  constructor() { }

  ngOnInit() {
    var self = this;
    
    if (self.isData === true){
      self.newTitle = self.Widget["Name"];
      self.newWidth = self.Widget["Width"];
      self.newHeight = self.Widget["Height"];

      self.setType(self.Widget["Type"]);
    }
    else{
      self.setType(WIDGET_DATABASE);
      self.newWidth = self.Widget["Width"];
        self.newHeight = self.Widget["Height"];
    }
  }

  close(){
    var self = this;
    
    self.closePopUp.emit();
  }
  
  changeType(){
    var self = this;

    self.Type = (<HTMLInputElement>document.getElementById("typeWidget")).value;
  }

  setType(type){
    (<HTMLInputElement>document.getElementById("typeWidget")).value = type;
  }

  saveChanges(){
    var self = this;
    var data: object;

    if (self.Type !=  WIDGET_DATABASE && self.Type != WIDGET_CHART) 
    {
      self.Type = WIDGET_DATABASE;
    }
    
    if (self.Type === WIDGET_DATABASE)
    {
      data = self.WidgetTypeMeta.WidgetDatabaseMeta;
    }
    else if (self.Type === WIDGET_CHART){
      data = self.WidgetTypeMeta.WidgetChartMeta;
    }

    var widget = {
      name: self.newTitle,
      type: self.Type,
      height: self.newHeight,
      width: self.newWidth,
      data: data
    }

    self.saveEdit.emit(widget);

    self.close();


  }
}
