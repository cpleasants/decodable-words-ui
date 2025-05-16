import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WordPatterns from './WordPatterns'
import Letters from './Letters'
import LetterCombinations from './LetterCombinations'
import OtherParameters from './OtherParameters'
import SightWords from './SightWords'
import { Navigate } from 'react-router-dom';

interface ManualSelectionsContainerProps {
  selected: Set<string>;
  setSelected: (selected: Set<string>) => void;
}

const ManualSelectionsContainer: React.FC<ManualSelectionsContainerProps> = ({ selected, setSelected }) => {
    return (
      <Routes>
        <Route path="" element={<Navigate to="word-patterns" replace />} /> {/* If someone navigates to /manual-selection, go to the first step */}
        <Route path="word-patterns" element={<WordPatterns selected = {selected} setSelected = {setSelected}/>} />
        <Route path="letters" element={<Letters selected = {selected} setSelected = {setSelected}/>} />
        <Route path="letter-combinations" element={<LetterCombinations selected = {selected} setSelected = {setSelected}/>} />
        <Route path="other-parameters" element={<OtherParameters selected = {selected} setSelected = {setSelected}/>} />
        <Route path="sight-words" element={<SightWords selected = {selected} setSelected = {setSelected} />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    )
}

export default ManualSelectionsContainer; 