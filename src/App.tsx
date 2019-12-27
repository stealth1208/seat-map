import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from '@Styles/globalStyles';
import { Seats } from '@Pages';
import { SeatBookingContext } from '@Contexts';
import data from './contexts/data.json';
import { Data } from '@Contexts/SeatBookingContext';

function Index() {
  return <Seats />;
}

const AppData = [...data];

function AppRouter() {
  console.log('App data', AppData);
  return (
    <Router>
      <SeatBookingContext.Provider
        value={{
          data: AppData,
        }}
      >
        <GlobalStyle />
        <Route path="/" exact={true} component={Index} />
      </SeatBookingContext.Provider>
    </Router>
  );
}

export default AppRouter;
