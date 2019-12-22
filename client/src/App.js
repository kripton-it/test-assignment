import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { BooksList, BookPage } from './components';

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route
          path="/book/:slug"
          render={({ match }) => (
            <BookPage slug={match.params.slug} />
          )}
        />
        <Route exact path="/" component={BooksList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
