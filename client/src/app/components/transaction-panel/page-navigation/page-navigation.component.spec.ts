import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PageNavigationComponent } from "./page-navigation.component";

describe("PageNavigationComponent", () => {
  let component: PageNavigationComponent;
  let fixture: ComponentFixture<PageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it("should update the page", () => {
    component.page = 9;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("span").innerText).toBe(
      "Página 10"
    );
  });

  it("should disable previous button", () => {
    component.page = 0;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(".previous:disabled")
    ).toBeTruthy();
  });
});
