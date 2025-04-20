import React, { useState } from 'react'
import { Button, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style'
import letterSets from '../../constants/letterSets'
import letterCombinationSets from '../../constants/letterCombinationSets';
import sightWordSets from '../../constants/sightWordsSets';

const Levels = ({setFormData, nextPage}) => {

  const [ level, setLevel ] = useState(0)
  const [ hoverLevel, setHoverLevel ] = useState(0)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const idList = [];
    for (let i = 1; i <= level; i++) {
        idList.push(...levels[i])
    }
    setFormData(prev => ({
        ...prev, 
        ...Object.fromEntries(idList.map(id => [id, true])),
    }))
    nextPage()
  }

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

  const LevelsToggleButton = ({ thisLevel, children }) => {
    return (
      <ToggleButton
        value={`level_${thisLevel}`}
        sx={{ 
          textTransform: 'none', 
          flexDirection: 'column',
          ...(hoverLevel >= thisLevel && {
            backgroundColor: (theme) => theme.palette.action.hover,
            color: (theme) => theme.palette.text.primary,
          }),
        }}
        selected={ level >= thisLevel }
        onChange={() => setLevel(thisLevel)}
        onMouseEnter={() => setHoverLevel(thisLevel)}
        onMouseLeave={() => setHoverLevel(0)}
      >
        {children}
      </ToggleButton>
    )
  }

  return (
    <Box>
      <ToggleButtonGroup
        sx = {{ flexWrap:"wrap", flexDirection: "column" }}
      >
        {/* Letter set 1, CVC */}
        <LevelsToggleButton thisLevel={1}>
          <Typography variant="h5">First Letters</Typography>
          <Typography variant="p"><strong>Letters: </strong>m, s, r, t, n, p, o, c, a, d</Typography>
          <Typography variant="p"><strong>Pattern(s): </strong>VC, CVC Only</Typography>
        </LevelsToggleButton>
        {/* Letter sets 1 and 2, CVC */}
        <LevelsToggleButton thisLevel={2}>
          <Typography variant="h5">Second Letters</Typography>
          <Typography variant="p"><strong>New Letters: </strong>g, f, b, k, i, l, h, w</Typography>
        </LevelsToggleButton>
        {/* All letters, CVC, VC */}
        <LevelsToggleButton thisLevel={3}>
          <Typography variant="h5">All Letters</Typography>
          <Typography variant="p"><strong>New Letters: </strong>e, v, j, u, y, z, x, q</Typography>
        </LevelsToggleButton>
        {/* Level03 + first sight words, include double-letters */}
        <LevelsToggleButton thisLevel={4}>
          <Typography variant="h5">Sight Words and Double-Consonants</Typography>
          <Typography variant="p"><strong>New Pattern(s): </strong>Include double-consonants (e.g. "bell")</Typography>
          <Typography variant="p"><strong>New Sight Words: </strong>Pre-K Sight Words</Typography>
        </LevelsToggleButton>
        {/* Level04 + "Common Digraphs" (mention CCVC and CVCC) */}
        <LevelsToggleButton thisLevel={5}>
          <Typography variant="h5">Common Digraphs</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>CVCC/CCVC with common digraphs (ck, sh, th, ch, wh, qu)</Typography>
        </LevelsToggleButton>
        {/* Level05 + "Blends 1" and "Blends 2" */}
        <LevelsToggleButton thisLevel={6}>
          <Typography variant="h5">Common Blends</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>CCVC with common blends (bl-, cl-, fl-, gl-, pl-, sl-, br-, cr-, dr-, fr-, gr-, pr-, tr-)</Typography>
        </LevelsToggleButton>
        {/* Level06 +  "Suffixes 1" + Kinder sight words */}
        <LevelsToggleButton thisLevel={7}>
          <Typography variant="h5">Common Suffixes and More Sight Words</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>CVCC with common suffix blends (-lp, -st, -ct, -pt, -sk, -lk, -lf, -xt, -ft, -nd, -mp, -lt, -nch)</Typography>
          <Typography variant="p"><strong>New Sight Words: </strong>Kindergarten Sight Words</Typography>
        </LevelsToggleButton>
        {/* Level07 + "Suffixes 2" */}
        <LevelsToggleButton thisLevel={8}>
          <Typography variant="h5">More Suffixes (ng/nk)</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>CVCC with ng/nk suffix blends (-ing, -ang, -ong, -ung, -ank, -ink, -onk, -unk)</Typography>
        </LevelsToggleButton>
        {/* Level08 + "Blends 3" */}
        <LevelsToggleButton thisLevel={9}>
        <Typography variant="h5">Less Common Blends</Typography>
        <Typography variant="p"><strong>New Patterns: </strong>CCVC with less common blends (sc-, shr-, sk-, sm-, sn-, sp-, squ-, st-, sw-)</Typography>
        </LevelsToggleButton>
        {
          /* Level09 + CVCe and VC
          TODO: VCe */
        }
        <LevelsToggleButton thisLevel={10}>
          <Typography variant="h5">Magic E (CVCe)</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>CVCe</Typography>
        </LevelsToggleButton>
        {/* Level10 + "Suffixes 3" */}
        <LevelsToggleButton thisLevel={11}>
          <Typography variant="h5">Long-Vowel Endings</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>Long-vowel endings (-ild, -old, -ind, -olt, -ost)</Typography>
        </LevelsToggleButton>
        {/* Level 11 + "Blends 4" and "Vowel Teams" */}
        <LevelsToggleButton thisLevel={12}>
          <Typography variant="h5">Vowel Blends and "y" Endings</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>y-ending blends (ay, ow, oy) and vowel teams (ee, ea, ai, ay, oa, ow, igh)</Typography>
        </LevelsToggleButton>
        {/* Level 12 + "Other" */}
        <LevelsToggleButton thisLevel={13}>
          <Typography variant="h5">Advanced Blends/Silent Letters</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>More blends (wr-, kn-, ph-, gh-, gn-, -mb, -tch, -dge)</Typography>
        </LevelsToggleButton>
        {/* Level13 + 1st Grade Sight Words */}
        <LevelsToggleButton thisLevel={14}>
          <Typography variant="h5">More Sight Words</Typography>
          <Typography variant="p"><strong>New Sight Words: </strong>1st Grade Sight Words</Typography>
        </LevelsToggleButton>
        {/* Level14 + CVCVC */}
        <LevelsToggleButton thisLevel={15}>
          <Typography variant="h5">CVCCVC Words (e.g. napkin)</Typography>
          <Typography variant="p"><strong>New Patterns: </strong>CVCCVC words including all previous blends and digraphs</Typography>
        </LevelsToggleButton>
      </ToggleButtonGroup>
      <FloatingFooter>
          <Button  variant="contained" onClick={handleSubmit}>Review</Button>
      </FloatingFooter>
    </Box>
  );
};

export default Levels;
