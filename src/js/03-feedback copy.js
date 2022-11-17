import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('input', throttle(onEmailMessageSave, 500));
formEl.addEventListener('submit', onSubmit);

populateInput();

//  Передача значень в ЛокалСт.
function onEmailMessageSave(evt) {
  evt.preventDefault();

  const emailInput = formEl.elements.email.value;
  const messageInput = textareaEl.value;

  formData = { email: emailInput, message: messageInput };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Заповнення збереженого в локалст + заповнення полів.

function populateInput() {
  const saveInput = localStorage.getItem(STORAGE_KEY);

  if (saveInput) {
    const parsSaveInput = JSON.parse(saveInput);
    textareaEl.value = parsSaveInput.message || '';
    formEl.elements.email.value = parsSaveInput.email || '';
  }
}

// Ф-ція Сабміту
function onSubmit(evt) {
  evt.preventDefault();

  const saveInput = localStorage.getItem(STORAGE_KEY);

  if (saveInput) {
    const parsSaveInput = JSON.parse(saveInput);
    console.log(parsSaveInput);
  }

  localStorage.removeItem(STORAGE_KEY);

  evt.currentTarget.reset();
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
