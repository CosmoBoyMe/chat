import './AuthForm.scss';
import { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FormField } from '../FormField';
import { Button } from '../../atoms/Button';

interface FormValues {
  login: string;
  password: string;
}

const logInShema = yup
  .object()
  .shape({
    login: yup.string().required('is Required field'),
    password: yup.string().required('is Required field'),
  })
  .required();

export const AuthForm: FC = () => {
  const history = useHistory();
  const handlerFormSubmit: SubmitHandler<FormValues> = (values) => {
    history.push('/chat');
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(logInShema),
  });
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
      <div className="auth-form__submit-btn">
        <Button type="submit">Log in</Button>
      </div>
    </form>
  );
};
