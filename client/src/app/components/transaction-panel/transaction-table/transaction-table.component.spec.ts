import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { TransactionTableComponent } from "./transaction-table.component";

describe("TransactionTableComponent", () => {
  let component: TransactionTableComponent;
  let fixture: ComponentFixture<TransactionTableComponent>;
  const mockTransactions = [
    {
      origin: {
        id: "USA",
        lat: 1,
        lng: 0,
        description: "-"
      },
      destination: {
        id: "USA",
        lat: 1,
        lng: 0,
        description: "-"
      },
      transactionId: "transaction-id",
      moneyAmount: 1000,
      userId: "user-id",
      courierId: "courier-id",
      isNewUser: false,
      createdAt: new Date()
    },
    {
      origin: {
        id: "USA",
        lat: 1,
        lng: 0,
        description: "-"
      },
      destination: {
        id: "USA",
        lat: 1,
        lng: 0,
        description: "-"
      },
      transactionId: "transaction-id",
      moneyAmount: 1000,
      userId: "user-id",
      courierId: "courier-id",
      isNewUser: false,
      createdAt: new Date()
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionTableComponent],
      imports: [
        MatTableModule,
        MatDialogModule,
        MatCardModule,
        HttpModule,
        HttpClientModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show null state message only", () => {
    component.transactions = [];
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector("p").innerText).toEqual(
      "No hay más transacciones."
    );
    expect(fixture.nativeElement.querySelector("table")).toBeFalsy();
  });

  it("should show a table", () => {
    component.transactions = mockTransactions;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector("table")).toBeTruthy();
  });

  it("should apply discounts", () => {
    component.transactions = mockTransactions;
    component.applyDiscounts = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector("del")).toBeTruthy();
  });

  it("should mark duplicate transactions", () => {
    component.transactions = mockTransactions;
    component.markDuplicates = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector(".duplicatedTransacionRow")
    ).toBeTruthy();
  });

  it("should show undocumented transactions", () => {
    component.transactions = mockTransactions;
    component.showUndocumented = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector(".mat-column-requiresDocumentation")
    ).toBeTruthy();
  });
});
