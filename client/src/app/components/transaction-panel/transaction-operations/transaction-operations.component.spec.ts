import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TransactionOperationsComponent } from "./transaction-operations.component";

describe("TransactionOperationsComponent", () => {
  let component: TransactionOperationsComponent;
  let fixture: ComponentFixture<TransactionOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionOperationsComponent],
      imports: [MatCheckboxModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
