import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// App
import App from './App';
import Pokemon from './Pokemon';
// Styles
import './index.css';
// Store
import { store } from './store';
import RTKApp from './RTKApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <App /> */}
    {/* <Pokemon /> */}
    <RTKApp />
  </Provider>
  // </React.StrictMode>,
);
