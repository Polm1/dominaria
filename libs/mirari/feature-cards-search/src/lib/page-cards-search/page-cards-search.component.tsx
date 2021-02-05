import React from 'react';

import { scryfall } from '@dominaria/api';

import { Card, CardList, SearchBar } from '@dominaria/components';

export const PageCardsSearch = () => {
  const [state, setState] = React.useState({ results: [] });

  const onSearchSubmit = (term: string) => {
    scryfall
      .get('/cards/search', {
        params: {
          q: term,
        },
      })
      .then((res) => {
        setState({ results: res.data.data });
      });
  };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar searchSubmit={onSearchSubmit} />
      <span>Found: {state.results.length} cards</span>
      <CardList>
        {state.results.map((card: any) => {
          return <Card key={card.id} card={card}></Card>;
        })}
      </CardList>
    </div>
  );
};
