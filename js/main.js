'use strict';

const list = document.querySelector('.list');
const getInput = () => {
  const result = prompt(`Введите строку`);
  return result ? result.trim().toLowerCase() : null;
};
const addLi = (userInput) => {

  console.log(': ', userInput);
  switch (true) {
    case userInput === 'del':
      if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        console.log(list.lastElementChild);
      }
      return addLi(getInput());
      break;
    case userInput === 'clear':
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
      return addLi(getInput());
      break;
    case userInput === null || userInput === 'exit':
      return;
      break;
    default:
      const li = document.createElement('li');
      li.textContent = userInput;
      li.classList.add('item');
      list.append(li);
      return addLi(getInput());
  }
};

addLi(getInput());