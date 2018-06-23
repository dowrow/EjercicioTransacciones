import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Role } from "../../models/role";

@Component({
  selector: "role-navigation",
  templateUrl: "./role-navigation.component.html",
  styleUrls: ["./role-navigation.component.scss"]
})
export class RoleNavigationComponent implements OnInit {
  @Output() setRole = new EventEmitter();

  roles = Role;

  constructor() {}

  ngOnInit() {}
}
