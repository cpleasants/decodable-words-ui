
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WordPatterns from './WordPatterns'
import Letters from './Letters'
import LetterCombinations from './LetterCombinations'
import OtherParameters from './OtherParameters'
import SightWords from './SightWords'
// import ReviewAndSubmit from '../common/ReviewAndSubmit';
// import ResponseDisplay from '../common/ResponseDisplay'
import { Link as RouterLink, Navigate } from 'react-router-dom';

const ManualSelectionsContainer = ({ setSelected }) => {
    // const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({})
    // const [apiResponse, setApiResponse] = useState(null);

    // const nextPage = () => setPage(page + 1)
    // const prevPage = () => setPage(page - 1)
    // const restart = () => setPage(0)

    const handleUpdate = (name) => (event, newValues) => {
      setFormData((prev) => ({
        ...prev,
        [name]: newValues,
      }));
    };

    const handleComplete = () => {
      setSelected(Object.keys(formData).flatMap(k => {return formData[k]}))
    }

    // const handleApiResponse = (response) => {
    //     // setPage(page + 1)
    //     setApiResponse(response)
    // }

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

    // switch (page) {
    //     case 0:
    //         return 
    //     case 1:
    //         return <Letters
    //             // nextPage = {nextPage}
    //             // prevPage = {prevPage}
    //             handleUpdate = {handleUpdate}
    //             formData = {formData}
    //             setFormData = {setFormData}/>
    //     case 2:
    //         return <LetterCombinations
    //             // nextPage = {nextPage}
    //             // prevPage = {prevPage}
    //             handleUpdate = {handleUpdate}
    //             formData = {formData}
    //             setFormData = {setFormData}/>
    //     case 3:
    //         return <OtherParameters
    //             // nextPage = {nextPage}
    //             // prevPage = {prevPage}
    //             handleUpdate = {handleUpdate}
    //             formData = {formData}/>
    //     case 4:
    //         return <SightWords
    //             // nextPage = {nextPage}
    //             // prevPage = {prevPage}
    //             handleUpdate = {handleUpdate}
    //             formData = {formData}
    //             setFormData = {setFormData}
    //             handleComplete = {handleComplete}
    //             />
    //     case 5: 
    //         return <ReviewAndSubmit
    //             selected = {Object.keys(formData).flatMap(k => {return formData[k]})}
    //             handleApiResponse = {handleApiResponse}
    //             // restart = {restart}
    //             />
    //     default:
    //         return <ResponseDisplay
    //             apiResponse = {apiResponse}
    //             // restart={restart}
    //             />
    // }
}

export default ManualSelectionsContainer;