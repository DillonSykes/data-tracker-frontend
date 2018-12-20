import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantGoalsComponent } from './important-goals.component';

describe('ImportantGoalsComponent', () => {
  let component: ImportantGoalsComponent;
  let fixture: ComponentFixture<ImportantGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
