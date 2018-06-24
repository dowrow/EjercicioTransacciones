import { Role } from "../../models/role";
import { roleReducer } from "./role.reducer";
import { SET_ROLE } from "./role.actions";

describe("RoleReducer", () => {
  describe("undefined action", () => {
    it("should return the default role", () => {
      const initialState = { role: Role.MANAGER };
      const action = {};
      const state = roleReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });
  describe("SET_ROLE action", () => {
    it("should change the current role", () => {
      const initialState = { role: Role.MANAGER };
      const action = { type: SET_ROLE, payload: Role.CONTROLLER };
      const state = roleReducer(initialState, action);
      expect(state.role).toBe(Role.CONTROLLER);
    });
  });
});
