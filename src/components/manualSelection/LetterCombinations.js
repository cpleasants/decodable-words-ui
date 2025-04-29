import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterCombinationSets from '../../constants/letterCombinationSets';
import { Button, Box, Typography, Link } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style'
import { Link as RouterLink } from 'react-router-dom';

const LetterCombinations = ({nextPage, prevPage, handleUpdate, formData, setFormData}) => {
    return (
        <Box>
            <Typography variant='h2'>Letter Combinations</Typography>
            {Object.keys(letterCombinationSets).map(groupName => (
                <Box key={groupName}>
                    <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={letterCombinationSets[groupName]}
                        handleUpdate={handleUpdate}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </Box>
            ))}
            <FloatingFooter>
              <Button  variant="contained" component={RouterLink} to="/manual-selection/word-patterns">Previous</Button>
              <Button  variant="contained" component={RouterLink} to="/manual-selection/letter-combinations">Next</Button>
            </FloatingFooter>
        </Box>
    )
}

export default LetterCombinations;