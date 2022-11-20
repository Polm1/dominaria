import React, { useCallback, useState } from 'react';

// Third Parties
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Grid,
  GridColumn,
  Header,
  HeaderContent,
  Segment,
} from 'semantic-ui-react';

// Components
import { CardsGrid, DeckZone, SearchBar } from '@dominaria/components';

// State
import {
  deckActions,
  MtgCard,
  MtgCardIndexed,
  selectDeckCards,
} from '@dominaria/mirari/state';

export const Deckbuilder = () => {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([] as MtgCard[]);

  const handleAddCard = useCallback((card: MtgCard) => {
    dispatch(deckActions.addSelectedCard_FromPageDeckBuilder(card));
  }, []);

  const handleRemoveCard = useCallback((cardIndexed: MtgCardIndexed) => {
    dispatch(deckActions.removeSelectedCard_FromPageDeckBuilder(cardIndexed));
  }, []);

  const cardsInDeck = useSelector(selectDeckCards);

  return (
    <MainContainer>
      <PageHeader>
        <HeaderContent as="h1">Mirari Deckbuilder</HeaderContent>
      </PageHeader>
      <Container>
        <Grid columns={2}>
          <GridColumn width={13}>
            <SearchBar onSetSearchResults={setSearchResults} />
            {searchResults ? (
              <CardsGrid cardsList={searchResults} onAddCard={handleAddCard} />
            ) : null}
          </GridColumn>
          <GridColumn width={3}>
            <HeaderContent as="h2">Your Deck</HeaderContent>
            <DeckZone
              cardsInDeck={cardsInDeck}
              onRemoveCard={handleRemoveCard}
            />
          </GridColumn>
        </Grid>
      </Container>
      <Footer vertical>
        Dominaria and Mirari are unofficial Fan Content permitted under the{' '}
        <a href="https://company.wizards.com/en/legal/fancontentpolicy">
          Fan Content Policy.
        </a>{' '}
        Not approved/endorsed by Wizards. Portions of the materials used are
        property of Wizards of the Coast. ©Wizards of the Coast LLC.
      </Footer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const PageHeader = styled(Header)`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Footer = styled(Segment)`
  text-align: center;
`;
