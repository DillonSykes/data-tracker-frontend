import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CollegePlansComponent } from "./college-plans.component";

describe("CollegePlansComponent", () => {
  let component: CollegePlansComponent;
  let fixture: ComponentFixture<CollegePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
