import React from 'react';
import { Button, Link } from '@mui/material';
import FloatingFooter from './styles/floatingFooter.style';

const ResponseDisplay = ({ apiResponse }) => {
  return (
    <div>
      <h2>Words List</h2>
      {apiResponse ? (
        <ul className="response">
            {apiResponse["filtered_words"].map(word => <li key={word}>{word}</li>)}
        </ul>
      ) : null}
      <FloatingFooter>
        
        <Button  variant="contained" component={Link} to="/">Start over</Button>
      </FloatingFooter>
    </div>
    
  );
};

export default ResponseDisplay;