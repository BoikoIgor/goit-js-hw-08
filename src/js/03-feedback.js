// Імпорт пакету throttle з lodash
import throttle from 'lodash.throttle';
// Визначення єлементів DOM форми, для доступу до їх значень
const refs = {
  form: document.querySelector('.feedback-form'),
  textareaMessage: document.querySelector('textarea[name="message"]'),
  inputEmail: document.querySelector('input[name="email"]'),
};
// Ключ для зберігання в Local Storage
const LOCALSTORAGE_KEY = 'feedback-form-state';
// Callback-функція для прослуховувача (при зміні значення елементів інпута)
function onInput(e) {
  // Створення об'єкту для зберігання даних в Local Storage
  const objectToLocal = {
    email: refs.inputEmail.value,
    message: refs.textareaMessage.value,
  };
  // Запис даних обєктом в Local Storage
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToLocal));
}
// Додавання прослуховувача на кожну зміну елементів форми кожні 500мс
refs.form.addEventListener('input', throttle(onInput, 500));
