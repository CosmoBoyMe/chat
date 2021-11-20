const BASE_URL_API = 'http://109.194.37.212:93/';
const BASE_WEB_SOCKET_URL = 'ws://109.194.37.212:2346';
const MAX_FILE_SIZE = 2097152;

const valideFileTypes = [
  'video/mp4',
  'video/ogg',
  'video/webm',
  'audio/mpeg',
  'audio/ogg',
  'image/jpeg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
];

const serverApi = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  genders: '/api/auth',
  upload: '/api/upload',
  captcha: '/api/auth/captcha',
};

const captchaUrl = `${BASE_URL_API}${serverApi.captcha}`;

export { valideFileTypes, captchaUrl, BASE_URL_API, serverApi, MAX_FILE_SIZE, BASE_WEB_SOCKET_URL };
