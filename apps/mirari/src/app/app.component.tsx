import React from 'react';

// Third Parties
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

// Mirari
import { Deckbuilder } from '@dominaria/mirari/features/deckbuilder/page';
import { deckbuilderMainPath } from '@dominaria/mirari/features/deckbuilder/routing';

export const App = () => {
  const pageNotFound = <CenteredWrapper>Page not found</CenteredWrapper>;

  return (
    <BrowserRouter basename="">
      <Switch>
        <Route exact path="/home">
          <Redirect to={deckbuilderMainPath} />
        </Route>
        <Route exact path="/">
          <Redirect to={'/home'} />
        </Route>
        <Route exact path={deckbuilderMainPath}>
          <Deckbuilder></Deckbuilder>
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
