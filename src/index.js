import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer />
    </QueryClientProvider>
  </Provider>
);