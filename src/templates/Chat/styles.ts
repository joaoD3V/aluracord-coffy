import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url('/img/background.jpg');
  background-position: center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 95vw;
    height: 85vh;
    background: ${theme.colors.neutrals[700]};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    ${media.lessThan('medium')`
      height: 95vh;
    `}
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
      color: ${theme.colors.white};
    }
  `}
`;

export const Logout = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    outline: 0;
    color: ${theme.colors.neutrals[200]};
    font-size: ${theme.font.sizes.small};
    font-weight: 400;
    cursor: pointer;
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    height: 4.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.neutrals[800]};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.white};

    &::placeholder {
      color: ${theme.colors.white};
    }
  `};
`;

export const Sticker = styled.button`
  ${({ theme }) => css`
    display: block;
    width: 5rem;
    height: 5rem;
    background: ${theme.colors.neutrals[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 100%;
    cursor: pointer;

    ${media.lessThan('medium')`
      width: 6rem;
    `}
  `};
`;

export const Send = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;

    svg {
      width: 3rem;
      height: 3rem;
      color: ${theme.colors.white};
    }
  `};
`;
