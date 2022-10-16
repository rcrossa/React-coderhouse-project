import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUkyWFDiqDcj_NOxhcvzPnrrNWdcBeg9M",
  authDomain: "coderhouse-ecommerce-5ad42.firebaseapp.com",
  projectId: "coderhouse-ecommerce-5ad42",
  storageBucket: "coderhouse-ecommerce-5ad42.appspot.com",
  messagingSenderId: "631743234851",
  appId: "1:631743234851:web:90e0ae4dc40cda9273c296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
  <React.StrictMode>
    <BrowserRouter basename='/react-coderhouse-project/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
