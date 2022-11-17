import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';

// Third Parties
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'semantic-ui-css/semantic.min.css';

// State
import { initStore } from '@dominaria/mirari/state';

// Components
import { App } from './app/app.component';

const { store, persistor } = initStore();

// TODO: evaluate to upgrade to React 18 and refactor properly to fix warning about 'findDOMNode is deprecated in StrictMode'
ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Suspense>
    ,
  </StrictMode>,
  document.querySelector('[data-role-react-root]')
);
