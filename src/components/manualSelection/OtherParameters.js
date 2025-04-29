import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup"
import { Button, Box, Typography, Link } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link as RouterLink } from 'react-router-dom';

const OtherParameters = ({nextPage, prevPage, handleUpdate, formData}) => {
    return (
        <Box>
            <Typography variant='h2'>Other Parameters</Typography>
            <CheckboxGroup 
                itemList={["Long Vowels", "Soft Consonants", "Alternative Vowel Sounds", "Double Consonants", "Silent E"]}
                idList={["allow_long_vowels", "allow_soft_consonants", "allow_alt_vowels", "allow_double_consonants", "allow_silent_e"]}
                handleUpdate={handleUpdate}
                formData={formData}
                groupName="other_parameters"
            />
            <FloatingFooter>
              <Button  variant="contained" component={RouterLink} to="/manual-selection/letter-combinations">Previous</Button>
              <Button  variant="contained" component={RouterLink} to="/manual-selection/sight-words">Next</Button>
            </FloatingFooter>
        </Box>
    )
}

export default OtherParameters