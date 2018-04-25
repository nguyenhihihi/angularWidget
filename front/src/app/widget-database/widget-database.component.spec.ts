import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDatabaseComponent } from './widget-database.component';

describe('WidgetDatabaseComponent', () => {
  let component: WidgetDatabaseComponent;
  let fixture: ComponentFixture<WidgetDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
