import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from '@Styles/globalStyles';
import { Seats } from '@Pages';
import { AppContextProvider } from '@Contexts';

function Index() {
  return <Seats />;
}

function AppRouter() {
  return (
    <Router>
      <AppContextProvider>
        <GlobalStyle />
        <Route path="/" exact component={Index} />
      </AppContextProvider>
    </Router>
  );
}

export default AppRouter;
