import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'babel-polyfill';
import App from './src/component/app';

ReactDom.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
