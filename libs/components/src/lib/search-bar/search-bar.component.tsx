import React, { PropsWithChildren, useState } from 'react';

// Third Parties
import styled from 'styled-components';
import {
  Form,
  FormField,
  FormInput,
  List,
  ListHeader,
  ListItem,
} from 'semantic-ui-react';
import scryfall from 'scryfall-client';
import Catalog from 'scryfall-client/dist/models/catalog';

// Components
import { Button } from '../button';

// State
import { MtgCard } from '@dominaria/mirari/state';

interface SearchBarProps {
  onSetSearchResults: React.Dispatch<React.SetStateAction<MtgCard[]>>;
}

export const SearchBar = ({
  onSetSearchResults,
}: PropsWithChildren<SearchBarProps>) => {
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState(
    [] as Catalog
  );

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    scryfall
      .search(searchTerm)
      .then((searchResults) => {
        const mappedSearchResults: Array<MtgCard> = searchResults.map(
          ({ id, cmc, mana_cost, name, type_line, image_uris }: MtgCard) => ({
            id,
            cmc,
            mana_cost,
            name,
            type_line,
            image_uris,
          })
        );
        onSetSearchResults(mappedSearchResults);
        return handleResetAutocompleteSuggestions();
      })
      .catch((error) => console.error('-- search.error', error));
  };

  const handleAutocomplete = (e) => {
    const searchTerm = e.target.value;
    scryfall
      .autocomplete(searchTerm)
      .then((searchResults) => {
        setAutocompleteSuggestions(searchResults);
      })
      .catch((err) => console.log('err', err));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectAutocompleteSuggestion = (cardName) => {
    setSearchTerm(cardName);
    handleResetAutocompleteSuggestions();
  };

  const handleResetAutocompleteSuggestions = () =>
    setAutocompleteSuggestions([] as Catalog);

  return (
    <Form onSubmit={handleSearch}>
      <FormField>
        <FormInput
          id="card-search"
          name="card-search"
          label="Card Search"
          type="text"
          placeholder="Enter a card name to start search e.g. 'Bog Wraith'"
          value={searchTerm}
          onKeyUp={handleAutocomplete}
          onChange={handleChange}
        />
      </FormField>
      <Button content="Search" />
      <List selection>
        {autocompleteSuggestions.length > 0 && (
          <ListItem>
            <ListHeader>
              Found: {autocompleteSuggestions.length} cards
            </ListHeader>
          </ListItem>
        )}
        {autocompleteSuggestions.map((cardName: string, index: number) => {
          return (
            <SuggestionItem
              key={index}
              onClick={() => handleSelectAutocompleteSuggestion(cardName)}
            >
              {cardName}
            </SuggestionItem>
          );
        })}
      </List>
    </Form>
  );
};

const SuggestionItem = styled(List.Item)`
  cursor: pointer;

  &: hover {
    font-size: 16px;
  }
`;
