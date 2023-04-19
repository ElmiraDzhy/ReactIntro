import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DayPart from './components/MyComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <DayPart hours={16}/>
    <DayPart hours={12}/>
    <DayPart hours={20}/>

    </>
  </React.StrictMode>
);


