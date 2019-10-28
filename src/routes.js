import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Repository from './pages/repository';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/repository" component={Repository} />
    </Switch>
  );
}
