import type { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    primary: '#007bff',
    background: '#ffffff',
    text: '#333333',
    textSecondary: '#475467',
    textTertiary: '#344054',
    textPrimaryVariant: '#667085',
    textPlain: '#5c5f5d',
    buttonBg: '#344054',
    buttonSecondary: '#ffffff',
    surface: '#f9fafb',
    shadow: '0 2px 30px 0 rgba(0, 0, 0, 0.08)',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#1e90ff',
    background: '#161617',
    text: '#ffffff',
    textSecondary: '#98a2b3',
    textTertiary: '#d0d5dd',
    textPrimaryVariant: '#858d9d',
    textPlain: '#a0a3a1',
    buttonBg: '#3f4e64',
    buttonSecondary: '#2a2a2b',
    surface: '#1f1f20',
    shadow: '0 2px 30px 0 rgba(0, 0, 0, 0.5)',
  },
};

// const InfoBlock = styled.div`
//   background-color: ${props => props.theme.colors.surface};
//   color: ${props => props.theme.colors.textPlain};
//   padding: 20px;
//   border-radius: 8px;
// `;

// const PrimaryButton = styled.button`
//   background-color: ${props => props.theme.colors.buttonBg};
//   color: white;
//   border: none;
// `;

// const Header = styled.header`
//   max-width: var(--max-width);
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   font-family: 'Poppins', sans-serif;
//   font-weight: 600; /* SemiBold */
// `;

// const GlassButton = styled.button`
//   background-color: ${props => props.theme.colors.buttonSecondary}aa; /* 'aa' для прозрачности */
// `;
