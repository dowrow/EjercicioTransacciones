import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Role } from "../../models/role";

@Component({
  selector: "role-navigation",
  templateUrl: "./role-navigation.component.html",
  styleUrls: ["./role-navigation.component.scss"]
})
export class RoleNavigationComponent implements OnInit {
  @Input() role: Role = Role.MANAGER;
  @Output() setRole = new EventEmitter();

  roles = Role;

  constructor() {}

  ngOnInit() {}

  getButtonColor(role: Role) {
    return role === this.role ? "primary" : "secondary";
  }
}
