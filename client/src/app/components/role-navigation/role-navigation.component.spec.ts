import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoleNavigationComponent } from "./role-navigation.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

describe("RoleNavigationComponent", () => {
  let component: RoleNavigationComponent;
  let fixture: ComponentFixture<RoleNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatButtonModule],
      declarations: [RoleNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
