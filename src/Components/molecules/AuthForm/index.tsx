import './AuthForm.scss';
import { FC, useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../store';
import { FormField } from '../FormField';
import { Button } from '../../atoms/Button';
import { Captcha } from '../../atoms/Capcha';
import { SCREENS } from '../../../routes/endpoints';
import { authUser } from '../../../store/Slices/authSlice';

interface FormValues {
  login: string;
  password: string;
  captcha: string;
}

const logInShema = yup
  .object()
  .shape({
    login: yup.string().required('is Required field'),
    password: yup.string().required('is Required field'),
    captcha: yup.string().min(5).max(5).required('is Required field'),
  })
  .required();

export const AuthForm: FC = () => {
  const history = useHistory();
  const { fetching, errorMessage } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const handlerFormSubmit: SubmitHandler<FormValues> = (values) => {
    dispatch(authUser(values));
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(logInShema),
  });

  const handlerRegistrationBtn = () => {
    history.push(SCREENS.SCREEN_USER_SIGN_UP);
  };

  return (
    <form onSubmit={handleSubmit(handlerFormSubmit)} className="auth-form">
      <div className="auth-form__field">
        <Controller
          name="login"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { invalid } }) => (
            <FormField
              placeholder="Input user name"
              type="text"
              label="User name"
              value={field.value}
              isValid={!invalid}
              onChange={field.onChange}
              name="login"
              id="login"
              errorMessage={errors.login?.message ?? null}
            />
          )}
        />
      </div>
      <div className="auth-form__field">
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field, fieldState: { invalid } }) => (
            <FormField
              placeholder="Input password"
              type="password"
              name="password"
              id="password"
              isValid={!invalid}
              label="Password"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.password?.message ?? null}
            />
          )}
        />
      </div>
      <div className="auth-form__field auth-form__capcha-field">
        <div className="auth-form__controller">
          <Controller
            control={control}
            name="captcha"
            defaultValue=""
            render={({ field, fieldState: { invalid } }) => (
              <FormField
                placeholder="Security code"
                type="text"
                name="captcha"
                id="captcha"
                isValid={!invalid}
                label="Security code"
                value={field.value}
                onChange={field.onChange}
                errorMessage={errors.captcha?.message ?? null}
              />
            )}
          />
        </div>
        <Captcha />
      </div>
      <p className="auth-form--error">{errorMessage}</p>
      <div className="auth-form__buttons">
        <Button disabled={fetching} type="submit">
          Log in
        </Button>
        <Button onClick={handlerRegistrationBtn} type="button">
          Registration
        </Button>
      </div>
    </form>
  );
};
