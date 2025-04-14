import React, { useState } from 'react';
import ManualSelectionsContainer from './components/manualSelection/ManualSelectionsContainer';
import GuidedSelectionContainer from './components/guidedSelection/GuidedSelectionsContainer'
import Button from '@mui/material/Button';


function App() {
  const [ selectionOption, setSelectionOption ] = useState("Level")

  const handleSelection = (event) => {
    setSelectionOption(event.target.value)
  }

  return (
    <div>
      <h1>Word Generator</h1>
      <select value={selectionOption} onChange={handleSelection}>
        <option value="Level">Select by Level</option>
        <option value="Manual">Manual Selection</option>
      </select>
      {
        selectionOption === "Level" ? (
          <GuidedSelectionContainer />
        ) : selectionOption === "Manual" ? (
          <ManualSelectionsContainer />
        ) : null
      }
    </div>
)
}

export default App;
