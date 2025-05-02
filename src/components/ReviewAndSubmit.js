
import { Button, Box, Table, TableRow, TableCell } from '@mui/material';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import phonemes from "../constants/phonemes";
import sightWordSets from "../constants/sightWordsSets";
import FloatingFooter from './common/styles/floatingFooter.style';

const ReviewAndSubmit = ({selected, setApiResponse}) => {

  const [ loading, setLoading ] = useState(false)

  const navigate = useNavigate();
    
  const generateRequest = () => {
    return {
      "hard_consonants" : phonemes["hard_consonants"].filter(s => selected.includes(`l_${s}`)),
      "soft_consonants" : selected.includes("allow_soft_consonants") || selected.includes("cvce") 
        ? phonemes["soft_consonants"].filter(s => selected.includes(`l_${s}`)) : [],
      "short_vowels" : phonemes["short_vowels"].filter(s => selected.includes(`l_${s}`)),
      "long_vowels" : selected.includes("allow_long_vowels") || selected.includes("cvce") 
        ? phonemes["long_vowels"].filter(s => selected.includes(`l_${s}`)) : [],
      "vowel_teams" : phonemes["vowel_teams"].filter(s => selected.includes(s)),
      "digraphs" : phonemes["digraphs"].filter(s => selected.includes(s)),
      "double_letters" : selected.includes("allow_double_consonants") 
        ? phonemes["double_letters"].filter(s => selected.includes(s[0])) : [],
      "prefix_digraphs" : phonemes["prefix_digraphs"].filter(s => selected.includes(s)),
      "prefix_blends" : phonemes["prefix_blends"].filter(s => selected.includes(s)),
      "suffix_blends" : phonemes["suffix_blends"].filter(s => selected.includes(s)),
      "common_endings" : phonemes["common_endings"].filter(s => selected.includes(s)),
      "allow_silent_e" : selected.includes("allow_silent_e"),
      "allow_vc" : selected.includes("vc"),
      "allow_cvc" : selected.includes("cvc"),
      "allow_cvce" : selected.includes("cvce"),
      "allow_cvcvc" : selected.includes("cvcvc"),
      "decodable_only" : true, // TODO: how to include non-decodable words? Should I even?
      "sight_words" : Object.values(sightWordSets).flat().filter(w => selected.includes(w))
    }
  }

  const data = generateRequest();    

  const handleSubmit = async (event) => {
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

  const listReviewFields = [
    // Note that I'm handling hard_consonants and short_vowels separately
    { label: "Soft Consonants", key: "soft_consonants" },
    { label: "Long Vowels", key: "long_vowels" },
    { label: "Vowel Teams", key: "vowel_teams" },
    { label: "Digraphs", key: "digraphs" },
    { label: "Double Letters", key: "double_letters" },
    { label: "Prefix Digraphs", key: "prefix_digraphs" },
    { label: "Prefix Blends", key: "prefix_blends" },
    { label: "Suffix Blends", key: "suffix_blends" },
    { label: "Common Endings", key: "common_endings" },
    { label: "Sight Words", key: "sight_words" }
  ]

  const displayListReviewFields = (field) => {
    return (
      <TableRow key={field.key}>
        <TableCell><strong>{field.label}</strong></TableCell>
        <TableCell>{`${data[field.key].length === 0 ?  "None" : data[field.key].join(', ')}`}</TableCell>
      </TableRow>
    )
  }

  const booleanReviewFields = [
    { label: "Allow Silent E", key: "allow_silent_e" },
    { label: "Allow VC", key: "allow_vc" },
    { label: "Allow CVC", key: "allow_cvc" },
    { label: "Allow CVCE", key: "allow_cvce" },
    { label: "Allow CVCVC", key: "allow_cvcvc" },
    { label: "Decodable Only", key: "decodable_only" }
  ]

  const displayBooleanReviewFields = (field) => {
    return (
      <TableRow key={field.key}>
        <TableCell><strong>{field.label}</strong></TableCell>
        <TableCell>{data[field.key] ? "Yes" : "No"}</TableCell>
      </TableRow>
    )
  }

  return (
    <Box>
      {/* {selected.join(', ')} */}
      <Table>
        <TableRow>
          <TableCell><strong>Hard Consonants</strong></TableCell>
          <TableCell>{`${data['hard_consonants'].length === 20 ?  "All (except q)" : data['hard_consonants'].join(', ')}`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><strong>Short Vowels</strong></TableCell>
          <TableCell>{`${data['short_vowels'].length === 5 ?  "All" : data['short_vowels'].join(', ')}`}</TableCell>
        </TableRow>
        {booleanReviewFields.map(field => displayBooleanReviewFields(field))}
        {listReviewFields.map(field => displayListReviewFields(field))} 
      </Table>
      <FloatingFooter>
        <Button variant="contained" component={Link} to="/">Edit</Button>
        <Button loading={loading} variant="contained" onClick={handleSubmit}>Submit</Button>
      </FloatingFooter>
    </Box>
    
  )
}

export default ReviewAndSubmit;