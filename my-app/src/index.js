// react is a core referential liabray which is  used to take all the referances 
// reactDom is an implementaton of react wich is used in web 
// react native is an implementation of react which is used in mobile apps


//JSX is a syntax extension for JavaScript, often used with React, that allows developers to write HTML-like 
//code directly within their JavaScript files. JSX is powerful because it makes writing and maintaining user 
//interfaces in React more intuitive and efficient.

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


