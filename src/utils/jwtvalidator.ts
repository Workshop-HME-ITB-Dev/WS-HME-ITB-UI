import jwt_decode from 'jwt-decode';

export const jwtValidate = (token: string) => {
  const decoded = jwt_decode<JWTCustomPayload>(token);
  const isExpired = Date.now() >= decoded.exp * 1000;
  return {
    isAuth: decoded && !isExpired,
    adminData: {
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name,
    },
  };
};

export const checkToken = () => {
  const token = localStorage.getItem('token');
  if (!token || (token && !jwtValidate(token).isAuth)) {
    localStorage.removeItem('token');
    window.location.reload();
  }
};

export interface JWTCustomPayload {
  sub: number;
  iat: number;
  exp: number;
  email: string;
  name: string;
}
