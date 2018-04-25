import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

const VIEW_MODE = 1;
const EDIT_MODE = 2;
const WIDGET_NULL = "WIDGET_NULL";

@Component({
  selector: 'app-widget-icon',
  templateUrl: './widget-icon.component.html',
  styleUrls: ['./widget-icon.component.css']
})
export class WidgetIconComponent implements OnInit {
  @Input() mode: number;
  @Input() Type: string; 
  @Input() isFullScreen: boolean;

  @Output() deleteWidget = new EventEmitter();
  @Output() editWidget = new EventEmitter();
  @Output() switchFullScreen = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(){
    var self = this;

    self.deleteWidget.emit();
  }

  edit(){
    var self = this;

    self.editWidget.emit()
  }

  switchFullScreenAtIconCom(){
    var self = this;

    self.switchFullScreen.emit();
  }
}
