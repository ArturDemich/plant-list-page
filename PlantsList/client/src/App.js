import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { createStore } from 'redux';
import  {Provider}  from 'react-redux';
import rootReducer from './storeRedux/reducers';

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />

      </BrowserRouter>
    </Provider>
  );
}}


