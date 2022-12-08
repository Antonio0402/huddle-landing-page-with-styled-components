import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/Global';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const theme = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    dark: 'hsl(192, 100%, 9%)',
    light: 'hsl(193, 100%, 96%)',
    'grayish-blue': 'hsl(208, 11%, 55%)',
  },
  text: {
    900: '2.5rem', /* 40px tracking tight*/
    '900-sm': '1.75rem',
    800: '2rem', /* 32px tracking tightest*/
    '800-sm': '1.375rem', /* 22px tracking tighter*/
    700: '1.75rem', /* 28px */
    '700-sm': '1.5rem', /* 24px */
    600: '1.125rem', /* 18px */
    'body-hero': '1.1875rem', /*600-sm 19px tracking wide */
    'body': '1.0625rem', /* 17px */
    500: '0.875rem', /* 14px */
    'btn-sm': '0.9375', /* 15px tracking tightest */
    400: '0.875rem', /* 14px */
    '400-sm': '1.1875rem', /* 19px tracking wide */
    'link-sm': '1.375rem', /* 22px */
  },
  tracking: {
    tightest: '-0.015em',
    tighter: '-0.01em',
    tight: '-0.005em',
    normal: '0em',
    wide: '0.005em',
    wider: '0.03em',
    widest: '0.05em',
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  shadow: {
    btn: '0 0 4px 4px hsla(208, 11%, 55%, 0.1)',
    cta: '0 0 4px 4px hsla(322, 100%, 66%, 0.5)'
  }
}

export default function App() {

  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
      <Header/>
      <Main/>
      <Footer/>
    </>
    </ThemeProvider>
  )
}