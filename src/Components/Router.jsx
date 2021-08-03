import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Admin from '../Routers/Admin/Admin';
const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={Admin}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
