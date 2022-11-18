import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onDataToForm, 500));

//  ++++++ v1 не до кінця зроблене завдання ++++++++
function onDataToForm(e) {
  const { name: key, value } = e.target;

  localStorage.setItem(key, value);
}

function saveDataTextarea() {
  const saveTextarea = localStorage.getItem('email');
  console.log(saveTextarea);

  if (saveTextarea) {
    console.log(saveTextarea);
  }

  textareaEl.value = saveTextarea;
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  console.log(`1) Виведені нижче дані отримані з localStorage`);
  const emailValue = localStorage.getItem('email');
  const messageValue = localStorage.getItem('message');
  console.log({ email: emailValue, message: messageValue });

  console.log(`2) Виведені нижче дані отримані з полів 'input' та 'textarea'`);
  console.log({ email: email.value, message: message.value }); //Виведення данних в консоль

  localStorage.removeItem('email'); //Видаляє дані з localStorage, ключ email
  localStorage.removeItem('message'); //Видаляє дані з localStorage, ключ message

  e.currentTarget.reset(); //Очищає поля форми
}

//++++++ v1 ++++++++
