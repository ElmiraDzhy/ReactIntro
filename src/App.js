import React from 'react';
function App() {
  return (
    <>
      <button onClick={() => window.location.assign('https://redux.js.org/')}>assign</button>
      <button onClick={() => window.location.reload() }>reload</button>
      <button onClick={() => window.location.replace('https://redux.js.org/')}>replace</button>
      
    </>
  );
}

export default App;
