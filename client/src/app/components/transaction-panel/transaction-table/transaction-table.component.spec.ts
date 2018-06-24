import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionTableComponent } from "./transaction-table.component";
import { MatTableModule } from "@angular/material/table";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

describe("TransactionTableComponent", () => {
  let component: TransactionTableComponent;
  let fixture: ComponentFixture<TransactionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionTableComponent],
      imports: [MatTableModule, MatDialogModule, HttpModule, HttpClientModule],
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
});
