import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.neutrals[500]};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${theme.colors.white};
    position: relative;
  `}
`;

type ProfileStytle = {
  profile: string;
};

export const Profile = styled.div<ProfileStytle>`
  ${({ profile }) => css`
    height: 4rem;
    width: 4rem;
    background-image: ${`url(${profile})`};
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
  `}
`;

export const Nickname = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;

export const Timestamp = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    font-weight: 300;
    position: absolute;
    top: 0;
    right: 0;
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.xxsmall};
    font-weight: 300;
    line-height: calc(${theme.font.sizes.medium} * 1.5);
    padding: 0 ${theme.spacings.large};
  `}
`;
