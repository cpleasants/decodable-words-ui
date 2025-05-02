
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WordPatterns from './WordPatterns'
import Letters from './Letters'
import LetterCombinations from './LetterCombinations'
import OtherParameters from './OtherParameters'
import SightWords from './SightWords'
import { Navigate } from 'react-router-dom';

const ManualSelectionsContainer = ({ setSelected }) => {
    const [formData, setFormData] = useState({});

    const handleUpdate = (name) => (event, newValues) => {
      setFormData((prev) => ({
        ...prev,
        [name]: newValues,
      }));
    };

    const handleComplete = () => {
      setSelected(Object.keys(formData).flatMap(k => {return formData[k]}));
    }

    return (
      <Routes>
        <Route path="" element={<Navigate to="word-patterns" replace />} />
        <Route path="word-patterns" element={<WordPatterns handleUpdate = {handleUpdate} formData = {formData}/>} />
        <Route path="letters" element={<Letters handleUpdate = {handleUpdate} formData = {formData} setFormData={setFormData}/>} />
        <Route path="letter-combinations" element={<LetterCombinations handleUpdate = {handleUpdate} formData = {formData} setFormData={setFormData}/>} />
        <Route path="other-parameters" element={<OtherParameters handleUpdate = {handleUpdate} formData = {formData}/>} />
        <Route path="sight-words" element={<SightWords handleUpdate = {handleUpdate} formData = {formData} setFormData={setFormData} handleComplete = {handleComplete}/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    )
  
}

export default ManualSelectionsContainer;