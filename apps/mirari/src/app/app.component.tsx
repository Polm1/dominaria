import React from 'react';

// Third Parties
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

// Mirari
import {
  cardsSearchMainPath,
  PageCardsSearch,
} from '@dominaria/mirari/feature-cards-search';

//TODO: fix types in entire app, especially HTML elements :)
//TODO: take scryfall to 2021 and install some modern-era utilities
// https://www.npmjs.com/package/scryfall (seems the best: includes typings, the only downside is maintenance)
// https://www.npmjs.com/package/scryfall-client (well documented, well maintained but seems no typings are included)
// see also
// https://www.npmjs.com/package/react-scryfall-components (just for inspiration, not install it)
// and https://www.npmjs.com/package/scryfall-sdk (but is for node)

//TODO: install pricing api https://www.npmjs.com/package/cardmarket-request

export const App = () => {
  const pageNotFound = <CenteredWrapper>Page not found</CenteredWrapper>;

  return (
    <BrowserRouter basename="">
      <Switch>
        <Route exact path="/home">
          <Redirect to={cardsSearchMainPath} />
        </Route>
        <Route exact path="/">
          <Redirect to={'/home'} />
        </Route>
        <Route exact path={cardsSearchMainPath}>
          <PageCardsSearch></PageCardsSearch>
        </Route>
        <Route>{pageNotFound}</Route>
      </Switch>
    </BrowserRouter>
  );
};

const CenteredWrapper = styled.h1`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;
