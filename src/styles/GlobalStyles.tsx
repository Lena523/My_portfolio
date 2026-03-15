// src/styles/GlobalStyles.tsx
import { css, Global } from '@emotion/react';
import type { Theme } from '@emotion/react';

const makeGlobalStyles = (theme: Theme) => css`
  :root {
    --max-width: 1200px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #d0d5dd;
    border-radius: 78px;
    padding: 12px 38px;
    width: 204px;
    height: 56px;
    min-width: 191px;

    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow:
      0 0 15px 0 rgba(0, 0, 0, 0.03),
      0 2px 30px 0 rgba(0, 0, 0, 0.08),
      0 0 1px 0 rgba(0, 0, 0, 0.3);

    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
    }
  }

  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  .font-geist {
    font-family: 'Geist', sans-serif;
  }
  .font-albert {
    font-family: 'Albert Sans', sans-serif;
  }
`;

export const GlobalStyles = ({ theme }: { theme: Theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
);
