import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  disabled: boolean;
  hasMargin: boolean;
  isPassword?: boolean;
};

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    background: ${theme.colors.brown200};
    cursor: not-allowed;

    input {
      background: ${theme.colors.brown200} !important;
      cursor: not-allowed;
    }
  `,
};

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    width: max-content;
    margin: 0 auto 0 0;
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, hasMargin, isPassword }) => css`
    width: 100%;
    height: 4.4rem;
    margin-bottom: ${hasMargin ? theme.spacings.small : '0'};
    background: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.border.radius};
    ${disabled && wrapperModifiers.disabled(theme)};

    &:focus-within {
      outline: auto;
    }

    svg {
      width: ${theme.font.sizes.xxlarge};
      height: ${theme.font.sizes.xxlarge};
      margin-right: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    input {
      width: 95%;
      height: 100%;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.secondary};
      outline: 0;
      border: 0;
      background: ${theme.colors.white};
      margin-right: ${isPassword ? theme.spacings.xxsmall : '0'};
      user-select: none;

      &::placeholder {
        color: ${theme.colors.secondary};
        font-weight: ${theme.font.light};
      }
    }
  `}

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
