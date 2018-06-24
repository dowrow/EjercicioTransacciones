import { HttpClientModule } from "@angular/common/http";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, Store } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { roleReducer } from "../store/roles/role.reducer";
import { TransactionEffects } from "../store/transactions/transaction.effects";
import { transactionReducer } from "../store/transactions/transaction.reducer";
import { AppComponent } from "./app.component";
import { RoleNavigationComponent } from "./role-navigation/role-navigation.component";
import { PageNavigationComponent } from "./transaction-panel/page-navigation/page-navigation.component";
import { TransactionOperationsComponent } from "./transaction-panel/transaction-operations/transaction-operations.component";
import { TransactionPanelComponent } from "./transaction-panel/transaction-panel.component";
import { TransactionTableComponent } from "./transaction-panel/transaction-table/transaction-table.component";
import {
  TOGGLE_APPLY_DISCOUNTS,
  TOGGLE_MARK_DUPLICATES,
  TOGGLE_SHOW_UNDOCUMENTED
} from "../store/transactions/transaction.actions";
import { TransactionsModel } from "../store/transactions/transactions.model";
import { HttpClient } from "selenium-webdriver/http";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: Store<TransactionsModel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ServiceWorkerModule.register("/ngsw-worker.js", {
          enabled: environment.production
        }),
        HttpModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        MatOptionModule,
        MatCheckboxModule,
        MatDialogModule,
        MatCardModule,
        StoreModule.forRoot({
          role: roleReducer,
          transaction: transactionReducer
        }),
        EffectsModule.forRoot([TransactionEffects])
      ],
      declarations: [
        AppComponent,
        RoleNavigationComponent,
        TransactionPanelComponent,
        TransactionTableComponent,
        PageNavigationComponent,
        TransactionOperationsComponent
      ]
    }).compileComponents();
    store = TestBed.get(Store);
    spyOn(store, "dispatch");
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create the app", async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should dispatch TOGGLE_APPLY_DISCOUNTS", async(() => {
    component.onOperationSelected(TOGGLE_APPLY_DISCOUNTS);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TOGGLE_APPLY_DISCOUNTS
    });
  }));

  it("should dispatch TOGGLE_MARK_DUPLICATES", async(() => {
    component.onOperationSelected(TOGGLE_MARK_DUPLICATES);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TOGGLE_MARK_DUPLICATES
    });
  }));

  it("should dispatch TOGGLE_SHOW_UNDOCUMENTED", async(() => {
    component.onOperationSelected(TOGGLE_SHOW_UNDOCUMENTED);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TOGGLE_SHOW_UNDOCUMENTED
    });
  }));
});
