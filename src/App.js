import React from 'react';
import WindowChange from './components/WindowChange';
function App() {
  return (
    <>
      <button onClick={() => window.location.assign('https://redux.js.org/')}>assign</button>
      <button onClick={() => window.location.reload() }>reload</button>
      <button onClick={() => window.location.replace('https://redux.js.org/')}>replace</button>
      

      <p>Lorem some text
        <button onClick={ () => {
          window.navigator.clipboard.writeText('Lorem some text')
        } }>Copy text</button></p>
      
      <WindowChange/>
    </>
  );
}

export default App;
