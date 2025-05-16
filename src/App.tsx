import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ManualSelectionsContainer from './components/manualSelection/ManualSelectionsContainer';
import GuidedSelection from './components/GuidedSelections';
import IntroPage from './components/IntroPage'
import ReviewAndSubmit from './components/ReviewAndSubmit';
import ResponseDisplay from './components/ResponseDisplay'

const App: React.FC = () => {
  const [ selected, setSelected ] = useState<Set<string>>(new Set([]))
  const [apiResponse, setApiResponse] = useState<any>(null);

  return (
    <Box sx={{ padding: 2 }}>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/by-level" element={<GuidedSelection setSelected={setSelected} />} />
        <Route path="/manual-selection/*" element={<ManualSelectionsContainer selected={selected} setSelected={setSelected} />} />
        <Route path="/review-and-submit" element={<ReviewAndSubmit selected={selected} setSelected={setSelected} setApiResponse={setApiResponse}/>} />
        <Route path="/response" element={<ResponseDisplay apiResponse={apiResponse}/>}/>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Box>
  );
}

export default App; 