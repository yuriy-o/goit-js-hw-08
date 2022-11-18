import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onDataToForm, 500));

saveDataTextarea();

const formData = {};
const getFormDataFromLS = key => JSON.parse(localStorage.getItem(key));
const onDataToForm = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

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
