import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { BooksList, BookPage, Header, Footer } from './components';

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div className="page">
      <GlobalStyle />
      <Route
        render={({ location }) => (
          <>
            <Header location={location} />
            <main>
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
            </main>
            <Footer />
          </>
        )}
      />
    </div>
  );
}

export default App;
