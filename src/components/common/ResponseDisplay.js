import React from 'react';
import { Button } from '@mui/material';
import FloatingFooter from './styles/floatingFooter.style';

const ResponseDisplay = ({ apiResponse, restart }) => {
  return (
    <div>
      <h2>Words List</h2>
      {apiResponse ? (
        <ul className="response">
            {apiResponse["filtered_words"].map(word => <li key={word}>{word}</li>)}
        </ul>
      ) : null}
      <FloatingFooter>
        
        <Button  variant="contained" onClick={restart}>Start over</Button>
      </FloatingFooter>
    </div>
    
  );
};

export default ResponseDisplay;