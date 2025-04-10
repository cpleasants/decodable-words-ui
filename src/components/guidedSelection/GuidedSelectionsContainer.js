import React, { useState } from 'react'
import Levels from './Levels'
import ReviewAndSubmit from '../common/ReviewAndSubmit';
import ResponseDisplay from '../common/ResponseDisplay'

const GuidedSelectionContainer = () => {
    const [ level, setLevel ] = useState(0)
    const [ page, setPage ] = useState(0)
    const [ formData, setFormData ] = useState({})
    const [ apiResponse, setApiResponse ] = useState(null);

    const nextPage = () => setPage(page + 1)
    const prevPage = () => setPage(page - 1)
    const restart = () => setPage(0)


    const handleApiResponse = (response) => {
        setPage(page + 1)
        setApiResponse(response)
    }

    switch (page) {
        case 0: 
            return <Levels
                level = {level}
                setLevel = {setLevel}
                formData = {formData}
                setFormData = {setFormData}
                nextPage = {nextPage}/>
        case 1:
            return <ReviewAndSubmit
                formData = {formData}
                handleApiResponse = {handleApiResponse}
                restart = {restart}/>
        default:
            return <ResponseDisplay
                apiResponse = {apiResponse}
                restart={restart}/>
    }

}

export default GuidedSelectionContainer