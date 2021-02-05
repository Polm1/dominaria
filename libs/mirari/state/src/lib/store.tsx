import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { deckFeatureName, deckReducer } from './deck-slice';

const rootReducer = combineReducers({
  [deckFeatureName]: deckReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
