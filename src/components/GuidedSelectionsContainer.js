import React, { useState } from 'react'
import { Button, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FloatingFooter from './common/styles/floatingFooter.style'
import letterSets from '../constants/letterSets'
import letterCombinationSets from '../constants/letterCombinationSets';
import sightWordSets from '../constants/sightWordsSets';
import { Link } from 'react-router-dom';


const GuidedSelectionContainer = ({ setSelected }) => {
  const [ level, setLevel ] = useState(0)
  const [ hoverLevel, setHoverLevel ] = useState(0)

  const levels = {
    1: [...letterSets["First Letters"].map(id => `l_${id}`), "vc", "cvc"],
    2: letterSets["Second Letters"].map(id => `l_${id}`),
    3: letterSets["Last Letters"].map(id => `l_${id}`),
    4: [...sightWordSets["Pre-K"], "allow_double_consonants"],
    5: letterCombinationSets["Common Digraphs"],
    6: [...letterCombinationSets["Blends 1"], ...letterCombinationSets["Blends 2"]],
    7: [...letterCombinationSets["Suffixes 1"], ...sightWordSets["Kinder"]],
    8: letterCombinationSets["Suffixes 2"],
    9: letterCombinationSets["Blends 3"],
    10: ["cvce", "allow_silent_e"],
    11: letterCombinationSets["Suffixes 3"],
    12: [...letterCombinationSets["Blends 4"], ...letterCombinationSets["Vowel Teams"]],
    13: letterCombinationSets["Other"],
    14: sightWordSets["First Grade"],
    15: ["cvcvc"]
  }

  const handleSubmit = () => {
    const ids = new Set([]);
    for (let i = 1; i <= level; i++) {
        levels[i].forEach(item => ids.add(item))
    }
    console.log(ids)
    setSelected(ids)
  }

  // Determine if it's a touch device to disable the hover (onMouseEnter) behavior on touch screens
  // because onMouseEnter is read as the first touch and I don't want to have to touch a selection
  // twice in order to actually select it.
  // TODO: not sure this is the best way to do this, but it seems to work.
  const isTouchDevice = typeof window !== 'undefined' && 
    (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));


  const createLevelButton = (thisLevel, title, contentsList) => (
    <ToggleButton 
      key={thisLevel} 
      value={thisLevel}
      selected={level >= thisLevel}
      sx={{
        textTransform: 'none',
        flexDirection: 'column',
        ...(hoverLevel >= thisLevel && {
          backgroundColor: (theme) => theme.palette.action.hover,
          color: (theme) => theme.palette.text.primary,
        }),
      }}
      onClick={() => {console.log(thisLevel); setLevel(thisLevel)}}  
      onMouseEnter={!isTouchDevice ? (() => {console.log("HERE"); setHoverLevel(thisLevel)}) : undefined}
      onMouseLeave={!isTouchDevice ? (() => setHoverLevel(0)) : undefined}
    >
      <Typography variant="h5">{title}</Typography>
      {contentsList.map((content, i) => {
        return <Typography key={title} variant="p">{content}</Typography>
      })}
    </ToggleButton>
  );

  return (
    <Box>
      <ToggleButtonGroup sx={{ flexWrap:"wrap", flexDirection: "column" }}>
        {createLevelButton(1, "First Letters", [
            <span><strong>New Letters:</strong> m, s, r, t, n, p, o, c, a, d</span>,
            <span><strong>New Patterns:</strong> VC, CVC Only</span>
        ])}
        {createLevelButton(2, "Second Letters", [
          <span><strong>New Letters:</strong> g, f, b, k, i, l, h, w</span>,
        ])}
        {createLevelButton(3, "All Letters", [
          <span><strong>New Letters:</strong> e, v, j, u, y, z, x, q</span>,
        ])}
        {createLevelButton(4, "Sight Words and Double-Consonants", [
          <span><strong>New Patterns:</strong> double-consonants (e.g. \"bell\")</span>,
          <span><strong>New Sight Words:</strong> Pre-K Sight Words</span>
        ])}
        {createLevelButton(5, "Common Digraphs", [
          <span><strong>New Patterns:</strong> CVCC/CCVC with common digraphs (ck, sh, th, ch, wh, qu)</span>
        ])}
        {createLevelButton(6, "Common Blends", [
          <span><strong>New Patterns:</strong> CCVC with common blends (bl-, cl-, fl-, gl-, pl-, sl-, br-, cr-, dr-, fr-, gr-, pr-, tr-)</span>
        ])}
        {createLevelButton(7, "Common Suffixes and More Sight Words", [
          <span><strong>New Patterns:</strong> CVCC with common suffix blends (-lp, -st, -ct, -pt, -sk, -lk, -lf, -xt, -ft, -nd, -mp, -lt, -nch)</span>,
          <span><strong>New Sight Words:</strong> Kindergarten Sight Words</span>
        ])}
        {createLevelButton(8, "More Suffixes (ng/nk)", [
          <span><strong>New Patterns:</strong> CVCC with ng/nk suffix blends (-ing, -ang, -ong, -ung, -ank, -ink, -onk, -unk)</span>
        ])}
        {createLevelButton(9, "Less Common Blends", [
          <span><strong>New Patterns:</strong> CCVC with less common blends (sc-, shr-, sk-, sm-, sn-, sp-, squ-, st-, sw-)</span>
        ])}
        {createLevelButton(10, "Magic E (CVCe)", [
          <span><strong>New Patterns:</strong> CVCe</span>
        ])}
        {createLevelButton(11, "Long-Vowel Endings", [
          <span><strong>New Patterns:</strong> Long-vowel endings (-ild, -old, -ind, -olt, -ost)</span>
        ])}
        {createLevelButton(12, "Vowel Blends and \"y\" Endings", [
          <span><strong>New Patterns:</strong> y-ending blends (ay, ow, oy) and vowel teams (ee, ea, ai, ay, oa, ow, igh)</span>
        ])}
        {createLevelButton(13, "Advanced Blends/Silent Letters", [
          <span><strong>New Patterns:</strong> More blends (wr-, kn-, ph-, gh-, gn-, -mb, -tch, -dge)</span>
        ])}
        {createLevelButton(14, "More Sight Words", [
          <span><strong>New Sight Words:</strong> 1st Grade Sight Words</span>
        ])}
        {createLevelButton(15, "CVCCVC Words (e.g. napkin)", [
          <span><strong>New Patterns:</strong> CVCCVC words including all previous blends and digraphs</span>
        ])}
      </ToggleButtonGroup>
      <FloatingFooter>
        <Button type="button" variant="contained" component={Link} to="/review-and-submit" onClick={handleSubmit}>Review</Button>
      </FloatingFooter>
    </Box>
  );

}

export default GuidedSelectionContainer