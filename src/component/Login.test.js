import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passportInputEl = screen.getByPlaceholderText(/password/i);
  expect(passportInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passportInputEl = screen.getByPlaceholderText(/password/i);
  expect(passportInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled();
});

test("error message should not be visible", () => {
  render(<Login />);
  const buttonInputEl = screen.getByTestId("error");
  expect(buttonInputEl).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passportInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passportInputEl, {target:{value: testValue}})
  expect(passportInputEl.value).toBe(testValue)
});

test("button should be visible after inputs are put", () => {
    render(<Login />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeVisible();
  });