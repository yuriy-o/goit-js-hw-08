import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input[name="email"]'),
  textareaEl: document.querySelector('textarea[name="message"]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormData, 500));

onSaveData();

//! Спочатку записую дані з localStorage. Якщо даних нема, тоді по умові зміній записується пустий об'єкт
let entryData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function onFormData(e) {
  const { name: key, value } = e.target;
  entryData[key] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(entryData)); //записую масив введених даних в localStorage
}

function onFormSubmit(e) {
  e.preventDefault();

  const getlocalStorage = localStorage.getItem('feedback-form-state');

  try {
    JSON.parse(getlocalStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  if (!refs.inputEl.value) {
    alert('Введіть email');
    return;
  } else if (!refs.textareaEl.value) {
    alert('Введіть текст');
    return;
  } else e.currentTarget.reset(); //Очищаю поля форми

  if (getlocalStorage) {
    console.log('Введені дані: ', JSON.parse(getlocalStorage)); // Вивожу в консоль масив введених даних
  }

  localStorage.removeItem('feedback-form-state'); //Видаляю дані з localStorage
  entryData = {}; //Очищаю дані з проміжного масиву
}

function onSaveData() {
  const getlocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (getlocalStorage) {
    refs.inputEl.value = getlocalStorage.email || '';
    refs.textareaEl.value = getlocalStorage.message || '';
  }
}
