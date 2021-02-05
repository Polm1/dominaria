import React from 'react';

import scryfall from 'scryfall-client';

import { Card, CardList, SearchBar } from '@dominaria/components';

export const PageCardsSearch = () => {
  const [state, setState] = React.useState({ results: [] });

  const onSearchSubmit = (term: string) => {
    scryfall
      .search(term)
      .then((res) => {
        setState({ results: res });
      })
      .catch((err) => {
        console.error('-- err', err);
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
