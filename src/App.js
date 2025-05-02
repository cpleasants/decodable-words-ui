
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ManualSelectionsContainer from './components/manualSelection/ManualSelectionsContainer';
import GuidedSelectionContainer from './components/GuidedSelectionsContainer';
import IntroPage from './components/IntroPage'
import ReviewAndSubmit from './components/ReviewAndSubmit';
import ResponseDisplay from './components/ResponseDisplay'

function App() {
  const [ selected, setSelected ] = useState([])
  const [apiResponse, setApiResponse] = useState(null);


  return (
    <Box sx={{ padding: 2 }}>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/by-level" element={<GuidedSelectionContainer setSelected={setSelected} />} />
        <Route path="/manual-selection/*" element={<ManualSelectionsContainer setSelected={setSelected} />} />
        <Route path="/review-and-submit" element={<ReviewAndSubmit selected={selected} setApiResponse={setApiResponse}/>} />
        <Route path="/response" element={<ResponseDisplay apiResponse={apiResponse}/>}/>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Box>
  );
}

export default App;
