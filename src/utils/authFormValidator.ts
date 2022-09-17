import { LoginForm, RegisterForm } from '../components/auth/auth.types';
import validator from 'validator';

export const validateRegisterForm = (formData: RegisterForm) => {
  const { email, name, password, passwordRetype } = formData;
  const res = {
    error: false,
    result: {
      email: '',
      name: '',
      password: '',
    },
  };
  // email must be proper email
  if (!validator.isEmail(email)) {
    res.error = true;
    res.result.email = 'Email must be proper !';
  }
  // email must not empty
  if (!email) {
    res.error = true;
    res.result.email = 'Email cannot be empty !';
  }
  // check if name min 5 char
  if (name.length < 5) {
    res.error = true;
    res.result.name = 'Name minimum length is 5 !';
  }
  // check if name max 25 char
  if (name.length > 25) {
    res.error = true;
    res.result.name = 'Name maximum length is 25 !';
  }
  // name must not empty
  if (!name) {
    res.error = true;
    res.result.name = 'Name cannot be empty !';
  }
  // check if password strongenough (min 5, contains number, contain lowercase, contain uppercase)
  if (!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{5,})$/)) {
    res.error = true;
    res.result.password =
      'Password minimum 5 character, contains number, lowercase, and uppercase !';
  }
  // password === passwordRetype
  if (password !== passwordRetype) {
    res.error = true;
    res.result.password = 'Password must match !';
  }
  // password and passwordRetype must not be empty
  if (!password || !passwordRetype) {
    res.error = true;
    res.result.password = 'Password cannot be empty !';
  }
  return res;
};

export const validateLoginForm = (formData: LoginForm) => {
  const { email, password } = formData;

  const res = {
    error: false,
    result: {
      email: '',
      password: '',
    },
  };
  // email must be proper email
  if (!validator.isEmail(email)) {
    res.error = true;
    res.result.email = 'Email must be proper !';
  }
  // email must not be empty
  if (!email) {
    res.error = true;
    res.result.email = 'Email cannot be empty !';
  }
  // password must not be empty
  if (!password) {
    res.error = true;
    res.result.password = 'Password cannot be empty !';
  }
  return res;
};
