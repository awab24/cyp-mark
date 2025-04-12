import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';
import { allowReducer } from './reducers/reducers';

// 1. Set up persist configuration
const persistConfig = {
  key: 'root', // You can give any key
  storage,     // Use local storage
};

// 2. Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, allowReducer);

// 3. Configure the store with the persisted reducer
const store = configureStore({
  reducer: {
    allow: persistedReducer, // Persist the 'allow' reducer
  },
});

// 4. Create the persistor
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* 5. Add PersistGate to delay rendering until rehydration is complete */}
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
