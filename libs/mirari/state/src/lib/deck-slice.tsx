import { createSlice } from '@reduxjs/toolkit';

const deckSlice = createSlice({
  name: 'deck',
  initialState: { cards: [] },
  reducers: {
    addCard(state, action) {
      //TODO: after TS installation, this works no more, fix it :)
      // state.cards.push(action.payload);

      //TODO: refactor using spread to push new object in the array (and fix previous issue)
      return {
        ...state,
        cards: action.payload,
      };
    },
  },
});

export const deckActions = deckSlice.actions;
export const { reducer: deckReducer, name: deckFeatureName } = deckSlice;