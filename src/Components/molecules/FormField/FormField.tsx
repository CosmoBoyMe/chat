import { ChangeEvent, FC } from 'react';
import { Input } from '../../atoms';
import './FormField.scss';

interface IProps {
  value: string;
  name: string;
  id: string;
  label: string;
  type: 'password' | 'text';
  isValid?: boolean;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormField: FC<IProps> = ({
  placeholder,
  type,
  label,
  onChange,
  value,
  name,
  id,
  isValid = true,
  className,
  errorMessage,
}) => (
  <div className={`form-field ${className}`}>
    <label className="form-field__label" htmlFor={id}>
      {label}
    </label>
    <Input
      type={type}
      onChange={onChange}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      isValid={isValid}
    />
    {isValid || (
      <div className="form-field__error-message">{errorMessage || 'Something goes wrong'}</div>
    )}
  </div>
);

export default FormField;
