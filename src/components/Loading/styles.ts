import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}

    &::after {
      overflow: hidden;
      display: inline-block;
      vertical-align: bottom;
      -webkit-animation: ellipsis steps(4, end) 900ms infinite;
      animation: ellipsis steps(4, end) 900ms infinite;
      content: '...';
      width: 0px;
    }

    @keyframes ellipsis {
      to {
        width: 1.25em;
      }
    }

    @-webkit-keyframes ellipsis {
      to {
        width: 1.25em;
      }
    }
  `}
`;

export const Loading = styled.img`
  height: 30rem;

  ${media.lessThan('medium')`
    height: 20rem;
  `}
`;
