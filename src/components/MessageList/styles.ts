import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100%;
    overflow-y: auto;
    height: 85%;
    background: ${theme.colors.neutrals[600]};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xsmall} 0;

    &::-webkit-scrollbar {
      width: 4px;

      ${media.lessThan('medium')`
        width: 0px;
      `}
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
  `};
`;
