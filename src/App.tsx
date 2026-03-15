import { Outlet } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';
import styled from '@emotion/styled';
import { GlobalStyles } from './styles/GlobalStyles';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
`;

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const handleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Container>
        <Header theme={handleTheme} />
        <Outlet />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
