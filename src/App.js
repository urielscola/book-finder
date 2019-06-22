import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <GlobalStyles />
            <div className="App">
              <Routes />
            </div>
          </>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
