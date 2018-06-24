import { Role } from "../../models/role";
import { SET_ROLE } from "./role.actions";

export function roleReducer(state = { role: Role.MANAGER }, action) {
  switch (action.type) {
    case SET_ROLE:
      return { role: action.payload };
    default:
      return state;
  }
}
