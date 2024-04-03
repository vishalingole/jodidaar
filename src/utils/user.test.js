// FILEPATH: /C:/Users/visha/jodidaar/src/utils/user.test.js
import { isUserLoggedIn } from "./user";

// Mock localStorage
jest.mock("localStorage");

beforeEach(() => {
  localStorage.clear();
});

test("returns false when user is not logged in", () => {
  expect(isUserLoggedIn()).toBe(false);
});

test("returns true when user is logged in", () => {
  const userObj = { id: "123" };
  localStorage.setItem("user", JSON.stringify(userObj));
  expect(isUserLoggedIn()).toBe(true);
});

test("returns false when user object does not have id", () => {
  const userObj = { name: "Test" };
  localStorage.setItem("user", JSON.stringify(userObj));
  expect(isUserLoggedIn()).toBe(false);
});
