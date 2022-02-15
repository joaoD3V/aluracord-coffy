import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutrals[800]};
    width: 40rem;
    height: 40rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 600;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.small};
    margin: 0 auto;
    max-width: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.white};
      border-radius: 20px;
      border: 3px solid ${theme.colors.white};
    }
  `}
`;

export const Sticker = styled.img`
  ${({ theme }) => css`
    width: 90%;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    transition: background 0.2s;

    &:hover {
      background: ${theme.colors.neutrals[600]};
      border-radius: ${theme.border.radius};
    }
  `}
`;
