const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

if (userPassword != null) {
  if (userPassword === ADMIN_PASSWORD) {
    message = ACCESS_IS_ALLOWED;
  } else {
    message = ACCESS_DENIED;
  }
} else {
  message = CANCELED_BY_USER;
}

console.log(message);
