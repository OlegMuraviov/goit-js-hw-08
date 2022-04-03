import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

let formData = {};

savedUserData();

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.message.value) {
    return alert('Вы ввели не все данные');
  }
  console.log(`email: ${refs.email.value}, message: ${refs.message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function savedUserData(event) {
  let savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;
  const savedLastData = JSON.parse(savedData);
  Object.entries(savedLastData).forEach(([name, value]) => {
    refs.form.elements[name].value = value;
    formData = savedLastData;
  });
}
