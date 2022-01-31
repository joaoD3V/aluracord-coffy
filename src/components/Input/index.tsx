import { ChangeEvent, InputHTMLAttributes, useState, MouseEvent } from 'react';

import { EyeSlash, Eye } from '@styled-icons/bootstrap';

import * as S from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: JSX.Element;
  label?: string;
  initialValue?: string;
  isPassword?: boolean;
  disabled?: boolean;
  hasMargin?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  name,
  icon,
  label,
  disabled = false,
  hasMargin = true,
  isPassword = false,
  value,
  onChange,
  maxLength,
  type,
  ...rest
}: InputProps) {
  const [inputType, setInputType] = useState(type);

  function handleShowHidePassword(event: MouseEvent<SVGSVGElement>) {
    event.preventDefault();
    inputType === 'password' ? setInputType('text') : setInputType('password');
  }

  return (
    <>
      {!!label && <S.Label htmlFor={name}>{label}:</S.Label>}

      <S.Wrapper
        disabled={disabled}
        hasMargin={hasMargin}
        isPassword={isPassword}
      >
        {!!icon && icon}
        <input
          name={name}
          {...(label ? { id: name } : {})}
          onChange={onChange}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          type={inputType}
          {...rest}
        />
        {isPassword &&
          (inputType === 'password' ? (
            <EyeSlash
              style={{ cursor: 'pointer' }}
              onClick={handleShowHidePassword}
            />
          ) : (
            <Eye
              style={{ cursor: 'pointer' }}
              onClick={handleShowHidePassword}
            />
          ))}
      </S.Wrapper>
    </>
  );
}
