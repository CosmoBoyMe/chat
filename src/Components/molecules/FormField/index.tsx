import './FormField.scss';
import { ChangeEvent, FC } from 'react';
import { Input } from '../../atoms/Input';

interface IFormFieldProps {
  value: string;
  name: string;
  id: string;
  label: string;
  type: 'password' | 'text';
  isValid?: boolean;
  placeholder?: string;
  errorMessage?: string | null;
  onChange: () => void;
}

export const FormField: FC<IFormFieldProps> = ({
  placeholder,
  type,
  label,
  onChange,
  value,
  name,
  id,
  isValid = true,
  errorMessage,
}) => (
  <div className="form-field">
    <label className="form-field__label" htmlFor={id}>
      {label}
    </label>
    <div className="form-field__input">
      <Input type={type} onChange={onChange} value={value} id={id} name={name} placeholder={placeholder} isValid={isValid} />
    </div>
    {!isValid && <div className="form-field__error-message">{errorMessage || 'Something goes wrong'}</div>}
  </div>
);
