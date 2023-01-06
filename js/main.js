'use strict';

const list = document.querySelector('.list');
const getInput = () => {
  const result = prompt(`Введите строку`);
  console.log(': ',result);
  return result !== null ? result.trim().toLowerCase() : result;
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

  switch (true) {
    case userInput === 'del': {
      del();
      break;
    }
    case userInput === 'clear': {
      clear();
      break;
    }
    case userInput === 'exit' || userInput === null: {
      return false;
    }
    case userInput === '': {
      return true;
    }
    default: {
      doDefault(userInput);
    }
  }
  return true;
};


do {
} while (addLi(getInput()));

