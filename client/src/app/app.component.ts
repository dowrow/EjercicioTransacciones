import { Component } from "@angular/core";
import { Role } from "./models/role";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // TODO: Move to store
  role: Role = Role.MANAGER;
}
