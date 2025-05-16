import React from 'react';
import ManualSelectionComponentProps from './ManualSelectionComponentProps';
import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterCombinationSets from '../../constants/letterCombinationSets';
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style'
import { Link } from 'react-router-dom';

const LetterCombinations: React.FC<ManualSelectionComponentProps> = ({selected, setSelected, includeFooter = true}) => {
    return (
        <Box>
            <Typography variant='h2'>Letter Combinations</Typography>
            {Object.keys(letterCombinationSets).map(groupName => (
                <Box key={groupName}>
                    <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={letterCombinationSets[groupName]}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            ))}
            {includeFooter && (
              <FloatingFooter>
                <Button  variant="contained" component={Link} to="/manual-selection/letters">Previous</Button>
                <Button  variant="contained" component={Link} to="/manual-selection/other-parameters">Next</Button>
              </FloatingFooter>
            )}
        </Box>
    )
}

export default LetterCombinations; 