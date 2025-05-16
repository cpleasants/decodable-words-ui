import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManualSelectionComponentProps from './ManualSelectionComponentProps';
import WordPatterns from './WordPatterns'
import Letters from './Letters'
import LetterCombinations from './LetterCombinations'
import OtherParameters from './OtherParameters'
import SightWords from './SightWords'
import { Navigate } from 'react-router-dom';


const ManualSelectionsContainer: React.FC<ManualSelectionComponentProps> = ({ selected, setSelected }) => {
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