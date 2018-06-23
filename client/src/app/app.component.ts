import { Component } from "@angular/core";
import { Role } from "./models/role";
import { SET_ROLE } from "./store/roles/actions";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private role: Role;
  private roleSubscription;

  constructor(private store: Store<any>) {
    this.roleSubscription = this.store.select("role").subscribe(roleModel => {
      this.role = roleModel.role;
    });
  }

  setRole(role: Role) {
    this.store.dispatch({ type: SET_ROLE, payload: role });
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
  }
}
