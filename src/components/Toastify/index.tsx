import styled, { css } from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = styled(ToastContainer)`
  ${({ theme }) => css`
    .Toastify__toast--info {
      background: ${theme.colors.secondary};
      color: ${theme.colors.white};

      .Toastify__toast-body {
        .Toastify__toast-icon {
          svg {
            fill: ${theme.colors.white};
          }
        }
      }

      .Toastify__progress-bar {
        background: ${theme.colors.white};
      }
    }

    .Toastify__toast--success {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    .Toastify__toast--warning {
      background: 'rgb(254, 255, 20)';
    }
    .Toastify__toast--error {
      background: ${theme.colors.secondary};
      color: ${theme.colors.white};

      .Toastify__toast-body {
        .Toastify__toast-icon {
          svg {
            fill: ${theme.colors.white};
          }
        }
      }

      .Toastify__progress-bar {
        background: ${theme.colors.white};
      }
    }
  `}
`;

export type typeToastProps = 'info' | 'success' | 'warn' | 'error';

export const showToast = (type: typeToastProps, message: string) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

export default function Toastify() {
  return <Toast />;
}
