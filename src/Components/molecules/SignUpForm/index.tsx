import './SignUpForm.scss';
import { FC, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { loadGenders, signUpSelect, signUpUser } from '../../../store/Slices/signUpSlice';
import { FormField } from '../FormField';
import { Button } from '../../atoms/Button';
import { Captcha } from '../../atoms/Capcha';
import { SCREENS } from '../../../routes/endpoints';
import { SelectField } from '../SelectField';
import { useAppDispatch, useAppSelector } from '../../../hooks';

interface IFormValues {
  login: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  gender: string;
  captcha: string;
}

const SignUpShema = yup
  .object()
  .shape({
    login: yup.string().max(50).required('is Required field'),
    password: yup.string().required('is Required field'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    nickname: yup.string().required('is Required field'),
    gender: yup.string().required('is Required field'),
    captcha: yup.string().min(5).max(5).required('is Required field'),
  })
  .required();

export const SignUpForm: FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { genders, errorMessage, fetching } = useAppSelector(signUpSelect.all);

  const handlerFormSubmit: SubmitHandler<IFormValues> = ({
    login,
    password,
    passwordConfirm,
    nickname,
    gender,
    captcha,
  }) => {
    const selectedGender = genders.find((item) => item.gender === gender);
    const genderId: number = selectedGender!.id;
    const values = { login, password, passwordConfirm, name: nickname, id: genderId, captcha };

    dispatch(signUpUser(values));
  };

  const getGendersNames = () => {
    if (genders) {
      return genders.map((gender) => gender.gender);
    }
    return [];
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(SignUpShema),
  });

  const handlerLoginBtn = () => {
    history.push(SCREENS.SCREEN_LOGIN);
  };

  useEffect(() => {
    dispatch(loadGenders());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(handlerFormSubmit)} className="sign-up-form">
      <div className="sign-up-form__field">
        <Controller
          name="login"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { invalid } }) => (
            <FormField
              placeholder="Input user name"
              type="text"
              label="Create user name"
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
      <div className="sign-up-form__field">
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
              label="Create password"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.password?.message ?? null}
            />
          )}
        />
      </div>
      <div className="sign-up-form__field">
        <Controller
          control={control}
          name="passwordConfirm"
          defaultValue=""
          render={({ field, fieldState: { invalid } }) => (
            <FormField
              placeholder="Password confirmation"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              isValid={!invalid}
              label="Password confirmation"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.passwordConfirm?.message ?? null}
            />
          )}
        />
      </div>
      <div className="sign-up-form__field">
        <Controller
          control={control}
          name="nickname"
          defaultValue=""
          render={({ field, fieldState: { invalid } }) => (
            <FormField
              placeholder="Nickname"
              type="text"
              name="nickname"
              id="nickname"
              isValid={!invalid}
              label="Nickname"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.nickname?.message ?? null}
            />
          )}
        />
      </div>
      <div className="sign-up-form__field sign-up-form__selector">
        <Controller
          control={control}
          name="gender"
          render={({ field, fieldState: { invalid } }) => (
            <SelectField
              label="Your gender"
              onChange={field.onChange}
              name="gender"
              id="gender"
              options={getGendersNames()}
              value={field.value}
              isValid={!invalid}
              errorMessage={errors.gender?.message ?? null}
            />
          )}
        />
      </div>
      <div className="sign-up-form__field auth-form__capcha-field">
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
        <div className="sign-up-form__captcha">
          <Captcha />
        </div>
      </div>
      <p className="sign-up-form__error">{errorMessage}</p>
      <div className="sign-up-form__buttons">
        <Button disabled={fetching} type="submit">
          Register
        </Button>
        <Button onClick={handlerLoginBtn} type="button">
          Log in
        </Button>
      </div>
    </form>
  );
};
