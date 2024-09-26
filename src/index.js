import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store.ts'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </ShopContextProvider>
);


