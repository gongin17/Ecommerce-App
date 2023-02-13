import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store ,{Persistor} from "./redux/reducer/store";
import { PersistGate } from 'redux-persist/integration/react';




 import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import '../node_modules/font-awesome/css/font-awesome.min.css';
ReactDOM.render(
  <BrowserRouter>
    <Provider  store={store} >
      <PersistGate loading={null} persistor={Persistor}>
         <App />
      </PersistGate>  
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
