import React from 'react';

// Third Parties
import styled from 'styled-components';
import { Card, CardContent, Image } from 'semantic-ui-react';

// Components
import { Button } from '../button';

// State
import { MtgCard, MtgCardIndexed } from '@dominaria/mirari/state';

interface PreviewCardProps {
  className?: string;
  card: MtgCard;
  cardIndex?: number;
  onAddCard?: (card: MtgCard) => void;
  onRemoveCard?: (cardindexed: MtgCardIndexed) => void;
}

export const CardPreview = styled(BasePreviewCard)`
  align-items: center;
  flex-direction: column;

  img {
    width: fill-available;
  }
`;

function BasePreviewCard({
  className,
  card,
  cardIndex,
  onAddCard,
  onRemoveCard,
}: PreviewCardProps) {
  const cardIndexed: MtgCardIndexed = {
    ...card,
    index: cardIndex,
  };

  return (
    <Card className={className}>
      <CardContent>
        <Image src={card.image_uris.png} alt={card.name} />
      </CardContent>
      <CardContent extra textAlign="center">
        {onAddCard ? (
          <Button onClick={() => onAddCard(card)}>Add to deck</Button>
        ) : null}
        {onRemoveCard ? (
          <Button secondary onClick={() => onRemoveCard(cardIndexed)}>
            Remove from deck
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
