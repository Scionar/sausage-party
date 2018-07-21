import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { PlayerViewContainer, GameViewContainer } from 'containers';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GameViewContainer} />
      <Route path="/player" component={PlayerViewContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
