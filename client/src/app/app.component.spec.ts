import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RoleNavigationComponent } from "./components/role-navigation/role-navigation.component";
import { TransactionPanelComponent } from "./components/transaction-panel/transaction-panel.component";
import { TransactionOperationsComponent } from "./components/transaction-panel/transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./components/transaction-panel/transaction-table/transaction-table.component";
import { PageNavigationComponent } from "./components/transaction-panel/page-navigation/page-navigation.component";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RoleNavigationComponent,
        TransactionPanelComponent,
        TransactionTableComponent,
        PageNavigationComponent,
        TransactionOperationsComponent
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
