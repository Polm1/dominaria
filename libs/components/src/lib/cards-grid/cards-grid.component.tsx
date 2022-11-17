import React from 'react';

// Third Parties
import { CardGroup } from 'semantic-ui-react';

// Components
import { CardPreview } from '../card-preview';

// State
import { MtgCard } from '@dominaria/mirari/state';

interface CardsGridProps {
  className?: string;
  cardsList: Array<MtgCard>;
  onAddCard: (card: MtgCard) => void;
}

export const CardsGrid = ({
  className,
  cardsList,
  onAddCard,
}: CardsGridProps) => {
  return (
    <CardGroup className={className}>
      {cardsList.map((card: MtgCard) => (
        <CardPreview
          key={card.id}
          card={card}
          onAddCard={onAddCard}
        ></CardPreview>
      ))}
    </CardGroup>
  );
};
