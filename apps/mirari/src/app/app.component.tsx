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

//TODO: fork scryfall-client and refactor to comply named export: https://github.com/crookedneighbor/scryfall-client

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
