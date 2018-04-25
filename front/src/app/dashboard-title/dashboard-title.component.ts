import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-title',
  templateUrl: './dashboard-title.component.html',
  styleUrls: ['./dashboard-title.component.css']
})
export class DashboardTitleComponent implements OnInit {

  @Input() mode: Number;
  @Output() changeMode = new EventEmitter();
    
  constructor() { }

  ngOnInit() {
  }

  switch(){
    
    var self = this;

    self.changeMode.emit();
  }
}
