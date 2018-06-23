import { Role } from "../../models/role";
import { roleReducer } from "./role.reducer";

describe("RoleReducer", () => {
  describe("undefined action", () => {
    it("should return the default state", () => {
      const initialState = { role: Role.MANAGER };
      const action = {};
      const state = roleReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });
});
