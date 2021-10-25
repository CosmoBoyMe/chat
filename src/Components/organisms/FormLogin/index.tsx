import './FormLogin.scss';
import { ChangeEvent, MouseEvent, useState, FC, FormEvent } from 'react';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button';
import { Logo } from '../../atoms/Logo';

export const FormLogin: FC = () => {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isUserNameValid, setUserNameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const handlerInputUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserNameValid(value !== '');
    setUserNameValue(value);
  };

  const handlerInputPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPasswordValid(value !== '');
    setPasswordValue(value);
  };

  const handlerFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <div className="login-form__header">
        <Logo size="l" />
        <h1 className="login-form__title">
          Wellcome to
          <span className="login-form__title--blue"> Chatty</span>
          <span className="login-form__title--light-blue">!</span>
        </h1>
        <h2 className="login-form__sub-title">Please, autorize yourself</h2>
      </div>
      <form onSubmit={handlerFormSubmit} className="login-form__form">
        <div className="login-form__field">
          <FormField
            placeholder="Input user name"
            type="text"
            label="User name"
            value={userNameValue}
            isValid={isUserNameValid}
            onChange={handlerInputUserChange}
            name="name"
            id="name"
          />
        </div>
        <div className="login-form__field">
          <FormField
            placeholder="Input password"
            type="password"
            name="password"
            id="password"
            isValid={isPasswordValid}
            label="Password"
            value={passwordValue}
            onChange={handlerInputPasswordChange}
          />
        </div>
        <div className="login-form__submit-btn">
          <Button type="submit">Log in</Button>
        </div>
      </form>
    </div>
  );
};
