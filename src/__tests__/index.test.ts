import { isEven } from "..";

test("evens are even", () => {
  const result = isEven(2)
  expect(result).toBe(true);
})

test("odds are not even", () => {
  const result = isEven(1)
  expect(result).toBe(false);
})

test("zero is even", () => {
  const result = isEven(0)
  expect(result).toBe(true);
})
