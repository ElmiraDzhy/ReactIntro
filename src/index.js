import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './components/MyComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <MyComponent name="Ivan" age={22}/>
    
    </>
  </React.StrictMode>
);


