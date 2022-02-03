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
    background-color: ${theme.colors.primary};
    width: 70rem;
    height: 30.4rem;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: 3.2rem;

    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 8rem;

    ${media.lessThan('large')`
      width: 80vw;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
  `}
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
`;

export const Description = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: 0.4rem;
    text-align: center;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.8rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 3.4rem;
    border-radius: ${theme.border.radius};
    border: 0;
    background: ${theme.colors.neutrals[800]};
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.white};

    &::placeholder {
      color: ${theme.colors.white};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 3.4rem;
    margin-top: ${theme.spacings.xxsmall};
    background: ${theme.colors.neutrals[500]};
    border: 0;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    border-radius: ${theme.border.radius};
    cursor: pointer;

    transition: 0.2s background;

    &:hover {
      background: ${theme.colors.neutrals[600]};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.neutrals[200]};
      color: ${theme.colors.neutrals[800]};

      &:hover {
        background: ${theme.colors.neutrals[200]};
      }
    }
  `}
`;

export const ImageArea = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 24rem;
    border-radius: 1rem;
    background: ${theme.colors.neutrals[800]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.lessThan('large')`
     margin: 0 auto;
    `}
  `}
`;

type ProfileStytle = {
  profile: string;
};

export const Profile = styled.div<ProfileStytle>`
  ${({ profile }) => css`
    height: 16.6rem;
    width: 15.56rem;
    background-image: ${`url(${profile})`};
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
  `};
`;

export const Nick = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    background: ${theme.colors.neutrals[999]};
    margin-top: ${theme.spacings.xsmall};
    padding: 0.4rem 0.8rem;
    border-radius: 10rem;
  `}
`;
