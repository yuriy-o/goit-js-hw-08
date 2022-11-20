import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onFormClick, 1000));
refs.form.addEventListener('submit', onFormSubmit);

const loadedObj = load('feedback-form-state');
if (loadedObj) {
  Object.entries(loadedObj).forEach(([name, value]) => {
    refs.form.elements[name].value = value;
  });
}

function onFormClick(evt) {
  const { name, value } = evt.target;
  let formObj = load('feedback-form-state');
  formObj = formObj || {};
  formObj[name] = value;
  save('feedback-form-state', formObj);
}

//! Додати перевірки на пусті дані
function onFormSubmit(evt) {
  evt.preventDefault();

  let formObj = load('feedback-form-state');
  if (formObj) {
    console.log(formObj);
    evt.currentTarget.reset();
    remove('feedback-form-state');
  }
}
