import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onDataToForm, 500));

//   !!!!!!!! v2 !!!!!!!!!!
// initForm();
let arrayEntryData = {}; //TODO\\ масив введених даних

function onDataToForm(e) {
  // console.log(e.target.name);
  // console.log(e.target.value);
  // const names = e.target.name;
  // const value = e.target.value;
  // const arr = { names: value, names: value };
  // console.log(arr);

  const { name: key, value } = e.target;
  arrayEntryData[key] = value; //TODO\\ записую введені дані в масив

  // const {
  //   elements: { email, message },
  // } = e.currentTarget;

  // const arr = { email: email.value, message: message.value };

  localStorage.setItem('feedback-form-state', JSON.stringify(arrayEntryData)); //записую масив введених даних в localStorage
}

function saveDataTextarea() {
  const saveTextarea = JSON.parse(localStorage.getItem('feedback-form-state'));

  // try {
  //   const saveTextarea = JSON.parse(
  //     localStorage.getItem('feedback-form-state')
  //   );
  // } catch (error) {
  //   console.log('can`t load feedback-form-stat');
  // }
  //Отримую дані з localStorage

  // inputEl.value = saveTextarea.email || ''; //Записую значення + перевірка
  // textareaEl.value = saveTextarea.message || ''; //Записую значення + перевірка

  if (saveTextarea.email) {
    inputEl.value = saveTextarea.email;
  }
  // console.log('aveTextarea.email', saveTextarea.email);

  // inputEl.value = saveTextarea.email || ''; //Записую значення + перевірка
  textareaEl.value = saveTextarea.message || ''; //Записую значення + перевірка
}

function onFormSubmit(e) {
  e.preventDefault();

  const dataLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  console.log('Введені дані: ', dataLocalStorage); // Вивожу в консоль масив введених даних

  localStorage.removeItem('feedback-form-state'); //Видаляє дані з localStorage

  e.currentTarget.reset(); //Очищаю поля форми
}

// function initForm() {
//   let formDatas = localStorage.getItem('arrayEntryData');
//   if (formDatas) {
//     formDatas = JSON.parse(formDatas);
//     Object.entries(formDatas).forEach(([name, value]) => {
//       arrayEntryData[name] = value;
//       formEl.elements[name].value = value;
//     });
//   }
// }

saveDataTextarea();

//   !!!!!!!! v2 !!!!!!!!!!

//  ++++++ v1 не до кінця зроблене завдання ++++++++
// function onDataToForm(e) {
//   const { name: key, value } = e.target;

//   localStorage.setItem(key, value);
// }

// function saveDataTextarea() {
//   const saveTextarea = localStorage.getItem('email');
//   console.log(saveTextarea);

//   if (saveTextarea) {
//     console.log(saveTextarea);
//   }

//   textareaEl.value = saveTextarea;
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const {
//     elements: { email, message },
//   } = e.currentTarget;

//   console.log(`1) Виведені нижче дані отримані з localStorage`);
//   const emailValue = localStorage.getItem('email');
//   const messageValue = localStorage.getItem('message');
//   console.log({ email: emailValue, message: messageValue });

//   console.log(`2) Виведені нижче дані отримані з полів 'input' та 'textarea'`);
//   console.log({ email: email.value, message: message.value }); //Виведення данних в консоль

//   localStorage.removeItem('email'); //Видаляє дані з localStorage, ключ email
//   localStorage.removeItem('message'); //Видаляє дані з localStorage, ключ message

//   e.currentTarget.reset(); //Очищає поля форми
// }

//++++++ v1 ++++++++
