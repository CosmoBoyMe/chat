import { ChangeEvent, MouseEvent, useState } from 'react';
import FormField from '../../molecules';
import './FormLogin.scss';
import { Button, HTag, Logo } from '../../atoms';

const FormLogin = () => {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isUserNameValid, setUserNameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserNameValid(value !== '');
    setUserNameValue(value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPasswordValid(value !== '');
    setPasswordValue(value);
  };

  const onClickBtnHander = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="login-form">
      <div className="login-form__header">
        <Logo size="l" />
        <HTag tag="h1" className="login-form__title">
          Wellcome to
          <span className="login-form__title--blue"> Chatty!</span>
        </HTag>
        <HTag tag="h2" className="login-form__text">
          Please, autorize yourself
        </HTag>
      </div>
      <form className="login-form__form">
        <FormField
          placeholder="Input user name"
          type="text"
          label="User name"
          value={userNameValue}
          isValid={isUserNameValid}
          onChange={onChangeUserName}
          name="name"
          id="name"
          className="login-form__field"
        />
        <FormField
          placeholder="Input password"
          type="password"
          name="password"
          id="password"
          isValid={isPasswordValid}
          label="Password"
          value={passwordValue}
          onChange={onChangePassword}
          className="login-form__field"
        />
        <Button className="login-form__submit-btn" onClick={onClickBtnHander} type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
