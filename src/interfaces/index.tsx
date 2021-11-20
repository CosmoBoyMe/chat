export interface IAuthFormValues {
  login: string;
  password: string;
  captcha: string;
}
export interface ISignUpFormValues {
  login: string;
  password: string;
  passwordConfirm: string;
  name: string;
  id: number | undefined;
  captcha: string;
}

export interface ISelectedFile {
  name: string;
  type: string;
  size: number;
  fileUrl: string;
}
