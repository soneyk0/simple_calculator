import { sum } from '../function/sum.js';
import { subtract } from '../function/subtraction.js';
import { multiply } from '../function/multiplication.js';
import { divide } from '../function/division.js';
import { percent } from '../function/percent.js';
import { changeSign } from '../function/change_of_sign.js';

const operations = {
  '-': subtract,
  '+': sum,
  '/': divide,
  'X': multiply,
  '%': percent,
  '+/-': changeSign
};

export function applyOperator(value1, value2, operator) {
  const operation = operations[operator];
  return operation(value1, value2);
}
