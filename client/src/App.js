import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { BooksList, BookPage, Header } from './components';

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <>
            <Header location={location} />
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
          </>
        )}
      />
    </div>
  );
}

export default App;
