import { Component, OnInit } from "@angular/core";
import { Role } from "../../models/role";

@Component({
  selector: "role-navigation",
  templateUrl: "./role-navigation.component.html",
  styleUrls: ["./role-navigation.component.scss"]
})
export class RoleNavigationComponent implements OnInit {
  roles = Role;

  constructor() {}

  ngOnInit() {}

  setRole(role: Role) {
    console.log(`Set role ${role}`);
  }
}
