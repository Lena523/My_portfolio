import { expect, test } from 'vitest';

function sum(a: number, b: number) {
  return a + b;
}

test('should add 2 and 3 and get 5', () => {
  expect(sum(2, 3)).toBe(5);
});
