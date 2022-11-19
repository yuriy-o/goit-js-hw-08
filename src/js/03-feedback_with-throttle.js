import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onDataToForm, 500));

// const throttle = require('lodash.throttle'); //викликаю throttle → частина бібліотеки Lodash

saveDataTextarea();

function onDataToForm(e) {
  const emailValue = e.currentTarget.elements.email.value;
  const msgValue = e.currentTarget.elements.message.value;

  const arrayEntryData = { email: emailValue, message: msgValue };

  localStorage.setItem('feedback-form-state', JSON.stringify(arrayEntryData)); //записую масив введених даних в localStorage
}

function saveDataTextarea() {
  const saveTextarea = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveTextarea) {
    inputEl.value = saveTextarea.email || ''; // Можливо ці умови слід поєднати!
  }
  if (saveTextarea) {
    textareaEl.value = saveTextarea.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const dataLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (dataLocalStorage) {
    console.log('Введені дані: ', dataLocalStorage); // Вивожу в консоль масив введених даних
  }

  localStorage.removeItem('feedback-form-state'); //Видаляю дані з localStorage

  e.currentTarget.reset(); //Очищаю поля форми
}
