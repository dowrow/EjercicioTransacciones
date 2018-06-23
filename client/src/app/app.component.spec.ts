import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RoleNavigationComponent } from "./components/role-navigation/role-navigation.component";
import { TransactionPanelComponent } from "./components/transaction-panel/transaction-panel.component";
import { TransactionOperationsComponent } from "./components/transaction-panel/transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./components/transaction-panel/transaction-table/transaction-table.component";
import { PageNavigationComponent } from "./components/transaction-panel/page-navigation/page-navigation.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        BrowserModule,
        ServiceWorkerModule.register("/ngsw-worker.js", {
          enabled: environment.production
        }),
        HttpModule,
        HttpClientModule
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
