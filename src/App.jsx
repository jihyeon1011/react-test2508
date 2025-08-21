import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
  }

  #root {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <GlobalStyles>
      <AppContainer>
        <Header />
        <HeroSection />
        <ContentSection />
        <Footer />
      </AppContainer>
    </GlobalStyles>
  );
}

export default App;
