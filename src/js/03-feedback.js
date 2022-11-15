const formEl = document.querySelector('.feedback-form');
console.log(formEl);

formEl.addEventListener('input', func);

function func(e) {
  localStorage.setItem(e.target.name, e.target.value);

  //   localStorage.setItem({ email: e.target.name, massege: e.target.value });
}
