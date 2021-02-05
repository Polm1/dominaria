import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

//STATE
import { deckActions } from '@dominaria/mirari/state';

import { Button } from '../button/button';

export const Card = ({ card }: any) => {
  const dispatch = useDispatch();

  const addCardToDeck = () => {
    try {
      dispatch(deckActions.addCard(card));
    } catch (e) {
      return console.error(e.message);
    }
  };

  return (
    <StyledCard className="ui card" key={card.id}>
      <img src={card.image_uris.png} alt={card.name} />
      <Button onClick={addCardToDeck}>Add to deck</Button>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
  }
`;
