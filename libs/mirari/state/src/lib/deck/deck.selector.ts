// Third Parties
import { createSelector } from '@reduxjs/toolkit';

// State
import { AppState } from '../store';
import { deckFeatureName } from './deck.slice';

export const selectDeck = (state: AppState) => state[deckFeatureName];

export const selectDeckCards = createSelector(
  [selectDeck],
  ({ cards }) => cards
);
