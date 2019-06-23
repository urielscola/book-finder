import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Category from '../pages/Category';
import Detail from '../pages/Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/favorites" component={Favorites} />
    <Route exact path="/category/:categoryId" component={Category} />
    <Route exact path="/books/:bookId" component={Detail} />
    <Route exact path="*" component={Home} />
  </Switch>
);

export default Routes;
