import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionPanelComponent } from "./transaction-panel.component";
import { TransactionOperationsComponent } from "./transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./transaction-table/transaction-table.component";
import { PageNavigationComponent } from "./page-navigation/page-navigation.component";

describe("TransactionPanelComponent", () => {
  let component: TransactionPanelComponent;
  let fixture: ComponentFixture<TransactionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionPanelComponent,
        TransactionOperationsComponent,
        TransactionTableComponent,
        PageNavigationComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
