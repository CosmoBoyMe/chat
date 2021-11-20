import axios from 'axios';
import { BASE_URL_API, serverApi } from '../const';
import { IAuthFormValues, ISignUpFormValues } from '../interfaces';

const axiosInstance = axios.create({
  baseURL: BASE_URL_API,
});

const authRegister = ({ login, password, passwordConfirm, name, id, captcha }: ISignUpFormValues) => {
  const formData = new FormData();
  formData.append('login', login);
  formData.append('password', password);
  formData.append('password_confirm', passwordConfirm);
  formData.append('name', name);
  formData.append('gender_id', `${id}`);
  formData.append('captcha', captcha);
  return axiosInstance.post(serverApi.register, formData);
};

const authLogin = ({ login, password, captcha }: IAuthFormValues) => {
  const formData = new FormData();
  formData.append('login', login);
  formData.append('password', password);
  formData.append('captcha', captcha);
  return axiosInstance.post(serverApi.login, formData);
};

const getGenders = () => axiosInstance.get(serverApi.genders);

const postFile = (file: File) => {
  const formData = new FormData();
  formData.append('0', file);
  return axiosInstance.post(serverApi.upload, formData);
};

export { authRegister, authLogin, getGenders, postFile };
