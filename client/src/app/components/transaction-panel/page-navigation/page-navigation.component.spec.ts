import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageNavigationComponent } from "./page-navigation.component";
import { NgbModule, NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";

describe("PageNavigationComponent", () => {
  let component: PageNavigationComponent;
  let fixture: ComponentFixture<PageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot()],
      declarations: [PageNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
