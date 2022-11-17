// Third Parties
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Models
import { MtgCard, MtgCardIndexed } from './deck.model';

export interface DeckState {
  cards: Array<MtgCard>;
}

export const deckInitalState: DeckState = {
  cards: [],
};

const deckSlice = createSlice({
  name: 'deck',
  initialState: deckInitalState,
  reducers: {
    addSelectedCard_FromPageDeckBuilder(state, action: PayloadAction<MtgCard>) {
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    },
    removeSelectedCard_FromPageDeckBuilder(
      state,
      action: PayloadAction<MtgCardIndexed>
    ) {
      return {
        ...state,
        cards: [
          ...state.cards.filter(
            (_card, index) => index !== action.payload.index
          ),
        ],
      };
    },
  },
});

export const deckActions = deckSlice.actions;
export const { reducer: deckReducer, name: deckFeatureName } = deckSlice;
