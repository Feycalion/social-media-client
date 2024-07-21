import { logout } from "./logout.js";
import "jest-localstorage-mock";

test("it clears the token from local storage", () => {
  logout();

  expect(localStorage.getItem("token")).toBeFalsy();
});
