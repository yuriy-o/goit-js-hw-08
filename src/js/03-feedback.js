import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input[name="email"]'),
  textareaEl: document.querySelector('textarea[name="message"]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormData, 500));

const entryData = {};

function onFormData(e) {
  const { name: key, value } = e.target;
  entryData[key] = value;

  // console.log('refs.inputEl.value', refs.inputEl.value);

  localStorage.setItem('feedback-form-state', JSON.stringify(entryData)); //записую масив введених даних в localStorage
}

function onFormSubmit(e) {
  e.preventDefault();

  const getlocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  // const emailValue = e.currentTarget.elements.email.value;
  // const msgValue = e.currentTarget.elements.message.value;

  console.log('getlocalStorage', getlocalStorage);
  // console.log('getlocalStorage.email', getlocalStorage.email);
  // console.log('getlocalStorage.message', getlocalStorage.message);

  // refs.inputEl.value = getlocalStorage.email;
  // refs.textareaEl.value = getlocalStorage.message;

  if (getlocalStorage) {
    refs.inputEl.value = getlocalStorage.email;
    refs.textareaEl.value = getlocalStorage.message;
  }

  e.currentTarget.reset(); //Очищаю поля форми
}

// saveDataTextarea();

// function onDataToForm(e) {
//   const emailValue = e.currentTarget.elements.email.value;
//   const msgValue = e.currentTarget.elements.message.value;

//   const arrayEntryData = { email: emailValue, message: msgValue };
//   тзь;
//   localStorage.setItem('feedback-form-state', JSON.stringify(arrayEntryData)); //записую масив введених даних в localStorage
// }

// function saveDataTextarea() {
//   const saveTextarea = JSON.parse(localStorage.getItem('feedback-form-state'));

//   if (saveTextarea) {
//     inputEl.value = saveTextarea.email || ''; // Можливо ці умови слід поєднати!
//   }
//   if (saveTextarea) {
//     textareaEl.value = saveTextarea.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const dataLocalStorage = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );

//   if (dataLocalStorage) {
//     console.log('Введені дані: ', dataLocalStorage); // Вивожу в консоль масив введених даних
//   }

//   localStorage.removeItem('feedback-form-state'); //Видаляю дані з localStorage

//   e.currentTarget.reset(); //Очищаю поля форми
// }
