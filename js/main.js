'use strict';

const list = document.querySelector('.list');
const getInput = () => {
  const result = prompt(`Введите строку`);
  return result ? result.trim().toLowerCase() : null;
};

const del = () => {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    console.log(list.lastElementChild);
  }
};

const clear = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const doDefault = (userInput) => {
  const li = document.createElement('li');
  li.textContent = userInput;
  li.classList.add('item');
  list.append(li);
};

const addLi = (userInput) => {
  console.log(': ', userInput);
  switch (true) {
    case userInput === 'del': {
      del();
    }
    case userInput === 'clear': {
      clear();
    }
    case userInput === null || userInput === '' || userInput === 'exit': {
      return false;
    }
    default: {
      doDefault(userInput);
    }
  }
  return true;
};


do {
} while (addLi(getInput()));

