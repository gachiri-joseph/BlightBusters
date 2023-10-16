function validateEmail(email) {
  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;
  return regex.test(email) && email.trim().length > 0;
}

function validatePassword(password) {
  return password.length >= 8 && password.trim().length > 0;
}

function validateMatchPassword(password, confirmPassword) {
  return password.trim() === confirmPassword.trim();
}

export {validateEmail, validatePassword, validateMatchPassword};
