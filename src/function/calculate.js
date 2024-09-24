import { applyOperator } from '../operations/operations.js';

let value1 = '';
let value2 = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '/', 'X'];
const specialAction = ['%', '+/-'];
const screen = document.querySelector('.calc-screen p');

const buttons = document.querySelectorAll('.btn');

function clearAll() {
  value1 = '';
  value2 = '';
  sign = '';
  finish = false;
  screen.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = event => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;

  const valueOfCurrentButton = event.target.textContent;

  if (screen.textContent === '0' && valueOfCurrentButton === '0') {
    return;
  }

  if (screen.textContent.length >= 8 && !action.includes(valueOfCurrentButton) && valueOfCurrentButton !== '=') {
    // buttons.forEach(button => {
    //   if (button.classList.contains('ac')) {
    //     button.disabled = false;
    //   } else {
    //     button.classList.add('disabled');
    //     button.disabled = true; // Отключаем остальные кнопки
    //     document.querySelector('.ac').onclick = () => {
    //       clearAll();
    //       buttons.forEach(btn => {
    //         btn.classList.remove('disabled');
    //         btn.disabled = false;
    //       });
    //     };
    //   }
    // });
    // clearAll();
    // screen.textContent = valueOfCurrentButton
    return;
  }

  screen.textContent = '';

  if (digit.includes(valueOfCurrentButton)) {
    if (value2 === '' && sign === '') {
      value1 += valueOfCurrentButton;
      screen.textContent = value1;
    } else if (value1 !== '' && value2 !== '' && finish) {
      value2 = valueOfCurrentButton;
      finish = false;
      screen.textContent = value2;
    } else {
      value2 += valueOfCurrentButton;
      screen.textContent = value2;
    }
    return;
  }

  if (valueOfCurrentButton === '=') {
    if (value1 !== '' && value2 !== '') {
      const result = applyOperator(value1, value2, sign);
      screen.textContent = result;
      value1 = result;
      value2 = '';
      sign = '';
    } else if (action.includes(valueOfCurrentButton)) {
      if (value2 !== '') {
        if (value1 === '') {
          value1 = value2;
        } else {
          const result = applyOperator(value1, value2, sign);
          screen.textContent = result;
          value1 = result;
        }
        sign = valueOfCurrentButton;
        value2 = '';
      }
    } else {
      value2 += valueOfCurrentButton;
      screen.textContent = value2;
    }
  }

  if (action.includes(valueOfCurrentButton)) {
    if (value1 !== '' && value2 !== '') {
      const result = applyOperator(value1, value2, sign);
      screen.textContent = result;
      value1 = result;
      value2 = '';
      sign = '';
    }
    sign = valueOfCurrentButton;
    screen.textContent = sign;
  }

  if (specialAction.includes(valueOfCurrentButton)) {
    sign = valueOfCurrentButton;
    const result = applyOperator(value1, value2, sign);
    screen.textContent = result;
    value1 = result;
    value2 = '';
    sign = '';
  }
};
