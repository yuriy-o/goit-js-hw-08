import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onDataToForm, 500));

//   !!!!!!!! v2 !!!!!!!!!!
// initForm();
// let arrayEntryData = {}; //TODO масив введених даних

// function onDataToForm(e) {
//   const { name: key, value } = e.target;

//   arrayEntryData[key] = value; //TODO записую ввередені дані в масив

//   localStorage.setItem('feedback-form-state', JSON.stringify(arrayEntryData)); //записую масив введених даних в localStorage
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   console.log(arrayEntryData); // Вивожу в консоль масив введених даних

//   localStorage.removeItem('feedback-form-state'); //Видаляє дані з localStorage

//   e.currentTarget.reset(); //Очищаю поля форми
// }

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

//   !!!!!!!! v2 !!!!!!!!!!

//  ++++++ v1 не до кінця зроблене завдання ++++++++
function onDataToForm(e) {
  const { name: key, value } = e.target;

  localStorage.setItem(key, value);
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

function saveDataTextarea() {
  const saveTextarea = localStorage.getItem('email');

  if (saveTextarea) {
    console.log(saveTextarea);
  }
}

//++++++ v1 ++++++++
