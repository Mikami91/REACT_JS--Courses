import React from 'react';
import ReactDOM from 'react-dom/client';
// App
import App from './App';
import Counter from './01-useState/Counter';
import CounterCustomHook from './01-useState/CounterCustomHook';
import Form from './02-useEffect/Form';
import FormCustomHook from './02-useEffect/FormCustomHook';
import MultiCustomHooks from './examples/MultiCustomHooks';
import FocusScreen from './03-useRef/FocusScreen';
import Layout from './04-useLayoutEffect/Layout';
import Memorize from './05-memo/Memorize';
import MemoHook from './06-useMemo/MemoHook';
import CallbackHook from './07-useCallback/CallbackHook';
import Father from './homework/Father';
// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Father />
  // </React.StrictMode>
);
