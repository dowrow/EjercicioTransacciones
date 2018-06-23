import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionPanelComponent } from "./transaction-panel.component";
import { TransactionOperationsComponent } from "./transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./transaction-table/transaction-table.component";
import { PageNavigationComponent } from "./page-navigation/page-navigation.component";
import { MatTableModule } from "@angular/material/table";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";

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
      ],
      imports: [
        MatTableModule,
        HttpModule,
        HttpClientModule,
        MatCheckboxModule,
        MatDialogModule,
        HttpClientModule
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
