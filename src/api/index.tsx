import axios from 'axios';
import { IAuthFormValues, ISignUpFormValues } from '../types';

const axiosInstance = axios.create({
  baseURL: 'http://109.194.37.212:93/',
});

export const authRegister = ({ login, password, passwordConfirm, name, id, captcha }: ISignUpFormValues) => {
  const formData = new FormData();
  formData.append('login', login);
  formData.append('password', password);
  formData.append('password_confirm', passwordConfirm);
  formData.append('name', name);
  formData.append('gender_id', `${id}`);
  formData.append('captcha', captcha);
  return axiosInstance.post('/api/auth/register', formData);
};

export const getGenders = () => axiosInstance.get('/api/auth');
export const authLogin = ({ login, password, captcha }: IAuthFormValues) => {
  const formData = new FormData();
  formData.append('login', login);
  formData.append('password', password);
  formData.append('captcha', captcha);
  return axiosInstance.post('/api/auth/login', formData);
};
