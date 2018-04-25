import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTypeEditDatabaseComponent } from './widget-type-edit-database.component';

describe('WidgetTypeEditDatabaseComponent', () => {
  let component: WidgetTypeEditDatabaseComponent;
  let fixture: ComponentFixture<WidgetTypeEditDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTypeEditDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTypeEditDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
