// Third Parties
import { combineReducers, Reducer } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Features
import { deckFeatureName, deckReducer } from './deck';

const rootReducer: Reducer = combineReducers({
  [deckFeatureName]: deckReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const initStore = () => {
  const appName = 'mirari';

  const persistConfig = {
    key: `${appName}`,
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return { persistor, store };
};
