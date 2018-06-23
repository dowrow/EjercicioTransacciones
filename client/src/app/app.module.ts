import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RoleNavigationComponent } from "./components/role-navigation/role-navigation.component";
import { TransactionPanelComponent } from "./components/transaction-panel/transaction-panel.component";
import { PageNavigationComponent } from "./components/transaction-panel/page-navigation/page-navigation.component";
import { TransactionOperationsComponent } from "./components/transaction-panel/transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./components/transaction-panel/transaction-table/transaction-table.component";
import { LocationDetailComponent } from "./components/transaction-panel/transaction-table/location-detail/location-detail.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    RoleNavigationComponent,
    TransactionPanelComponent,
    PageNavigationComponent,
    TransactionOperationsComponent,
    TransactionTableComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
