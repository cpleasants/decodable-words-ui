import React, { useState } from 'react';
import { Box, Typography, Stack, Switch } from '@mui/material';
import ManualSelectionsContainer from './components/manualSelection/ManualSelectionsContainer';
import GuidedSelectionContainer from './components/guidedSelection/GuidedSelectionsContainer'

function App() {
  const [ selectionOption, setSelectionOption ] = useState("Level")

  const handleSwitch = (event) => {
    setSelectionOption(event.target.checked ? "Manual" : "Level");
  }

  return (
    <Box>
      <Typography variant="h1">Word Generator</Typography>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Typography>By Level</Typography>
        <Switch checked={selectionOption === "Manual"} onChange={handleSwitch}/>
        <Typography>Manual</Typography>
      </Stack>
      {
        selectionOption === "Level" ? (
          <GuidedSelectionContainer />
        ) : selectionOption === "Manual" ? (
          <ManualSelectionsContainer />
        ) : null
      }
    </Box>
)
}

export default App;
