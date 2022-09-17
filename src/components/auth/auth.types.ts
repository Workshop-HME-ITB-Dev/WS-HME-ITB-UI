export interface LoginForm {
  email: string;
  password: string;
}
export interface ErrorLoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  name: string;
  password: string;
  passwordRetype: string;
}

export interface ErrorRegisterForm {
  email: string;
  name: string;
  password: string;
}
