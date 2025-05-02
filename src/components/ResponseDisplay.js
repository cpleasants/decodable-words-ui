import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from './common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';

const ResponseDisplay = ({ apiResponse }) => {
  return (
    <Box>
      <Typography variant="h4">Words List</Typography>
      {apiResponse ? (
        <ul className="response">
            {apiResponse["filtered_words"].map(word => <li key={word}>{word}</li>)}
        </ul>
      ) : null}
      <FloatingFooter>
        <Button  variant="contained" component={Link} to="/">Start over</Button>
      </FloatingFooter>
    </Box>
    
  );
};

export default ResponseDisplay;