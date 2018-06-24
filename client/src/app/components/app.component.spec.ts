import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RoleNavigationComponent } from "./role-navigation/role-navigation.component";
import { TransactionPanelComponent } from "./transaction-panel/transaction-panel.component";
import { TransactionOperationsComponent } from "./transaction-panel/transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./transaction-panel/transaction-table/transaction-table.component";
import { PageNavigationComponent } from "./transaction-panel/page-navigation/page-navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../../environments/environment";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { roleReducer } from "../store/roles/role.reducer";
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { transactionReducer } from "../store/transactions/transaction.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TransactionEffects } from "../store/transactions/transaction.effects";
import { MatCardModule } from "@angular/material/card";

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
