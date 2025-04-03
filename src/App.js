import React from 'react';
import ManualSelectionsContainer from './components/manualSelection/ManualSelectionsContainer';

function App() {
  

  return (
    <div>
      <h1>Word Generator</h1>
      <ManualSelectionsContainer/>
    </div>
)
}

export default App;

/*
TODO:
- Separate out CheckboxGroup vs CheckboxGroupWithToggle
*/