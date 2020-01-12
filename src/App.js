import React from 'react';

import { Provider } from 'react-redux'
import store from './store/index'

import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './routes/index.js';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
