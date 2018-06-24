import { HttpClientModule } from "@angular/common/http";
import { async, TestBed } from "@angular/core/testing";
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
import { StoreModule } from "@ngrx/store";
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

describe("AppComponent", () => {
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
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
