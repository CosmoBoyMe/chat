import './Select.scss';
import cn from 'classnames';
import { FC } from 'react';

interface ISelectProps {
  options: Array<string>;
  onChange: () => void;
  name: string;
  id: string;
  value: string;
  isValid: boolean;
}

export const Select: FC<ISelectProps> = ({ options, onChange, name, id, value, isValid }) => {
  return (
    <select
      onChange={onChange}
      className={cn('select', {
        select__error: !isValid,
      })}
      name={name}
      id={id}
      defaultValue=""
      value={value}
    >
      <option className="select__option--placeholder" hidden value="">
        Your gender
      </option>
      {options.map((optionName, index) => (
        <option key={`${optionName}__${index}`} value={optionName}>
          {optionName}
        </option>
      ))}
    </select>
  );
};
