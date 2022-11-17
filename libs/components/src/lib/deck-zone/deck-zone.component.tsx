import React from 'react';

// Third Parties
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

// Components
import { CardPreview } from '../card-preview';

// State
import { MtgCard, MtgCardIndexed } from '@dominaria/mirari/state';

interface DeckZoneprops {
  cardsInDeck: Array<MtgCard>;
  onRemoveCard?: (cardindexed: MtgCardIndexed) => void;
}

interface CardsOffset {
  top: number;
  left: number;
}

export const DeckZone = ({ cardsInDeck, onRemoveCard }: DeckZoneprops) => {
  return (
    <Container>
      {cardsInDeck
        ? cardsInDeck.map((card, index) => {
            return (
              <CardInDeckPreview
                key={index}
                card={card}
                cardsOffset={getCardsOffset(cardsInDeck, index)}
                cardIndex={index}
                onRemoveCard={onRemoveCard}
              ></CardInDeckPreview>
            );
          })
        : null}
    </Container>
  );
};

const CardInDeckPreview = styled(CardPreview)<{
  cardsOffset: CardsOffset;
}>`
  &&& {
    position: absolute;
    top: ${({ cardsOffset: { top } }) => `${top}px`};
    left: ${({ cardsOffset: { left } }) => `${left}px`};
    margin: 0 0;
  }
`;

function getCardsOffset(cardsInDeck: Array<MtgCard>, index: number) {
  return index <= 5
    ? { top: (index + 5) * 10, left: index * 10 }
    : { top: 100, left: 50 };
}
