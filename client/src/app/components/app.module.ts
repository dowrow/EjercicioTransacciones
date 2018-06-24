import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../../environments/environment";
import { RoleNavigationComponent } from "./role-navigation/role-navigation.component";
import { TransactionPanelComponent } from "./transaction-panel/transaction-panel.component";
import { PageNavigationComponent } from "./transaction-panel/page-navigation/page-navigation.component";
import { TransactionOperationsComponent } from "./transaction-panel/transaction-operations/transaction-operations.component";
import { TransactionTableComponent } from "./transaction-panel/transaction-table/transaction-table.component";
import { LocationDetailComponent } from "./transaction-panel/transaction-table/location-detail/location-detail.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { roleReducer } from "./../store/roles/role.reducer";
import { StoreModule } from "@ngrx/store";
import { transactionReducer } from "./../store/transactions/transaction.reducer";
import { TransactionEffects } from "./../store/transactions/transaction.effects";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RoleEffects } from "./../store/roles/role.effects";

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
    EffectsModule.forRoot([RoleEffects, TransactionEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LocationDetailComponent]
})
export class AppModule {}
