import { FC } from 'react';
import './SelectField.scss';
import { Select } from '../../atoms/Select';

interface ISelectField {
  value: string;
  name: string;
  id: string;
  label: string;
  isValid: boolean;
  options: Array<string>;
  errorMessage?: string | null;
  onChange: () => void;
}

export const SelectField: FC<ISelectField> = ({ value, name, id, label, isValid, errorMessage, options, onChange }) => {
  return (
    <div className="select-field">
      <label aria-label="select field label" htmlFor={id} className="select-field__label">
        {label}
      </label>
      <div className="select-field__select">
        <Select isValid={isValid} options={options} value={value} id={id} name={name} onChange={onChange} />
      </div>
      {!isValid && <div className="select-field__error-message">{errorMessage || 'Something goes wrong'}</div>}
    </div>
  );
};
