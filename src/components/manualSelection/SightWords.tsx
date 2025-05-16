import React from 'react';
import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import sightWordSets from '../../constants/sightWordsSets'
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';

interface SightWordsProps {
  selected: Set<string>;
  setSelected: (selected: Set<string>) => void;
  includeFooter?: boolean;
}

const SightWords: React.FC<SightWordsProps> = ({ selected, setSelected, includeFooter = true }) => {
    return (
        <Box>
            <Typography variant='h2'>Sight Words</Typography>
            {Object.keys(sightWordSets).map(groupName => (
                <Box key={groupName}>
                    <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={sightWordSets[groupName]}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            ))}
            {includeFooter && (
              <FloatingFooter>
                <Button  variant="contained" component={Link} to="/manual-selection/other-parameters">Previous</Button>
                <Button  variant="contained" component={Link} to="/review-and-submit">Review</Button>
              </FloatingFooter>
            )}
        </Box>
    )
}

export default SightWords; 