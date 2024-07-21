import { login } from "./login.js";
import "jest-localstorage-mock";

test("it stores a token in local storage", async () => {
  const email = "feycalion@stud.noroff.no";
  const pw = "999999999";

  await login(email, pw);

  expect(localStorage.getItem("token")).toBeTruthy();
});
