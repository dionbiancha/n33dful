import Cookies from 'js-cookie';

export const isLogged = () => {
  let token = Cookies.get('token');
  return (token) ? true : false;
  if(rememberPassword) {
    Cookies.set('token', token, {expires: 999});
  } else {
    Cookies.set('token', token);
  }
};

export const doLoggin = (token, rememberPassword = false) => {

};