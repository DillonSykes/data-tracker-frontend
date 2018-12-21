import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LiquidAssetsComponent } from "./liquid-assets.component";

describe("LiquidAssetsComponent", () => {
  let component: LiquidAssetsComponent;
  let fixture: ComponentFixture<LiquidAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
