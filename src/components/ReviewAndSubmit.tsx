import React from 'react';
import { Button, Box, Table, TableRow, TableCell, Dialog, DialogContent, DialogActions, Typography, TableBody } from '@mui/material';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { phonemes, sightWordSets, letterSets, letterCombinationSets, wordPatterns, otherParameters } from "../constants";
import FloatingFooter from './common/styles/floatingFooter.style';
import LetterCombinations from './manualSelection/LetterCombinations';
import SightWords from './manualSelection/SightWords';
import WordPatterns from './manualSelection/WordPatterns';
import Letters from './manualSelection/Letters';
import OtherParameters from './manualSelection/OtherParameters';

interface ReviewAndSubmitProps {
  selected: Set<string>;
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>;
  setApiResponse: React.Dispatch<React.SetStateAction<any>>; // TODO: should the response by `any` or should it be something more strict?
}

const ReviewAndSubmit: React.FC<ReviewAndSubmitProps> = ({selected, setSelected, setApiResponse}) => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const navigate = useNavigate();
    
  const handleOpenDialog = (dialogName: string) => {
    setOpenDialog(dialogName);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  const generateRequest = () => {
    return {
      "hard_consonants" : phonemes["hard_consonants"].filter(s => selected.has(`l_${s}`)),
      "soft_consonants" : selected.has("allow_soft_consonants") || selected.has("cvce") 
        ? phonemes["soft_consonants"].filter(s => selected.has(`l_${s}`)) : [],
      "short_vowels" : phonemes["short_vowels"].filter(s => selected.has(`l_${s}`)),
      "long_vowels" : selected.has("allow_long_vowels") || selected.has("cvce") 
        ? phonemes["long_vowels"].filter(s => selected.has(`l_${s}`)) : [],
      "vowel_teams" : phonemes["vowel_teams"].filter(s => selected.has(s)),
      "digraphs" : phonemes["digraphs"].filter(s => selected.has(s)),
      "double_letters" : selected.has("allow_double_consonants") 
        ? phonemes["double_letters"].filter(s => selected.has(s[0])) : [],
      "prefix_digraphs" : phonemes["prefix_digraphs"].filter(s => selected.has(s)),
      "prefix_blends" : phonemes["prefix_blends"].filter(s => selected.has(s)),
      "suffix_blends" : phonemes["suffix_blends"].filter(s => selected.has(s)),
      "common_endings" : phonemes["common_endings"].filter(s => selected.has(s)),
      "allow_silent_e" : selected.has("allow_silent_e"),
      "allow_vc" : selected.has("vc"),
      "allow_cvc" : selected.has("cvc"),
      "allow_cvce" : selected.has("cvce"),
      "allow_cvcvc" : selected.has("cvcvc"),
      "decodable_only" : true, // TODO: how to include non-decodable words? Should I even?
      "sight_words" : Object.values(sightWordSets).flat().filter(w => selected.has(w))
    }
  }

  const data = generateRequest();    

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // allows me to handle the <form >submission manually instead of going to default (which is redirect to URL)

    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/filter-words', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      setApiResponse(result);

      navigate('/response');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }

  const componentMap: Record<string, React.FC<any>> = { // TODO: should/can I make sure that this is a component of the manual selection directory?
    "wordPatterns" : WordPatterns,
    "letters" : Letters,
    "letterCombinations" : LetterCombinations,
    "otherParameters" : OtherParameters,
    "sightWords" : SightWords
  }

  const renderEditDialog = () => {
    if (!openDialog) return null;
    const Component = componentMap[openDialog];
    return (
      <Dialog open={true} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogContent>
          <Component selected={selected} setSelected={setSelected} includeFooter={false} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box>
      <Typography variant="h3">Review And Submit</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell><strong>Word Patterns</strong></TableCell>
            <TableCell>{Object.keys(wordPatterns).filter(k => selected.has(wordPatterns[k])).join(', ')}</TableCell>
            <TableCell>
              <Button variant="outlined" onClick={() => handleOpenDialog('wordPatterns')}>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Letters</strong></TableCell>
            <TableCell>{Object.values(letterSets).flat().filter(s => selected.has(`l_${s}`)).join(', ')}</TableCell>
            <TableCell>
              <Button variant="outlined" onClick={() => handleOpenDialog('letters')}>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Letter Combinations</strong></TableCell>
            <TableCell>{Object.values(letterCombinationSets).flat().filter(w => selected.has(w)).join(', ')}</TableCell>
            <TableCell>
              <Button variant="outlined" onClick={() => handleOpenDialog('letterCombinations')}>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Other Parameters</strong></TableCell>
            <TableCell>{Object.keys(otherParameters).filter(k => selected.has(otherParameters[k])).join(', ')}</TableCell>
            <TableCell>
              <Button variant="outlined" onClick={() => handleOpenDialog('otherParameters')}>Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Sight Words</strong></TableCell>
            <TableCell>{Object.values(sightWordSets).flat().filter(w => selected.has(w)).join(', ')}</TableCell>
            <TableCell>
              <Button variant="outlined" onClick={() => handleOpenDialog('sightWords')}>Edit</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {renderEditDialog()}
      <FloatingFooter>
        <Button variant="contained" component={Link} to="/manual-selection">Back</Button>
        <Button loading={loading} variant="contained" onClick={handleSubmit}>Submit</Button>
      </FloatingFooter>
    </Box>
  );
};

export default ReviewAndSubmit; 