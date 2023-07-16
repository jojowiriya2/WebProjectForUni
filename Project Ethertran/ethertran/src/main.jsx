import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TransactionsProvider } from "./context/TransactionContext";
import './index.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import store from './app/store';
import { Provider } from 'react-redux';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
 <TransactionsProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </TransactionsProvider>
  </Provider>
  
)
