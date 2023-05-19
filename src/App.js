import React, { useState, useCallback, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import CountryPage from './component/CountryPage';

const App = () => {


  
  let routes;

    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/country/:cname" exact>
          <CountryPage/>
        </Route>
        <Redirect to="/" />
      </Switch>
    );

  return (
      <Router>
        <main>{routes}</main>
      </Router>
  );
};

export default App;
