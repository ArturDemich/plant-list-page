import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlantsStore from './storeMobx/PlantsStore';


export const Context = createContext(null)



ReactDOM.render(
  <Context.Provider value={{
    plant: new PlantsStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

