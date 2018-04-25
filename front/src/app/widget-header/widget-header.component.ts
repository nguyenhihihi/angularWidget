import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @Input() mode: number;
  @Input() Name:  string;
  @Input() Type : string;
  @Input() isFullScreen: boolean;

  @Output() deleteWidget = new EventEmitter();
  @Output() editWidget = new EventEmitter();
  @Output() switchFullScreen = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteWidgetAtHeaderComponent(){
    var self = this;

    self.deleteWidget.emit();
  }

  editWidgetAtWidgetHeaderCom(){
    var self = this;
    self.editWidget.emit();
  }

  switchFullScreenAtWidgetHeaderCom(){
    var self = this;

    self.switchFullScreen.emit();
  }

}
