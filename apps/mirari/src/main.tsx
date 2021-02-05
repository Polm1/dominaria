import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

// Redux
import { Provider } from 'react-redux';
import { store } from '@dominaria/mirari/state';

import { App } from './app/app.component';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
    ,
  </React.StrictMode>,
  document.querySelector('[data-role-react-root]')
);
