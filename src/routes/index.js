import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Teste from '../pages/Teste';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/teste" component={Teste} />
  </Switch>
);

export default Routes;
