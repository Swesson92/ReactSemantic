import React from 'react';
import Toolbar from './components/toolbar/toolbar';


function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style={{marginTop: '64px'}}>
        <p>This is the content page!</p>
      </main>
    </div>
  );
}

export default App;
