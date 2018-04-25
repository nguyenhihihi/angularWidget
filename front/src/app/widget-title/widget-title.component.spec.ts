import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTitleComponent } from './widget-title.component';

describe('WidgetTitleComponent', () => {
  let component: WidgetTitleComponent;
  let fixture: ComponentFixture<WidgetTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
