import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import sightWordSets from '../../constants/sightWordsSets'
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';

const SightWords = ({nextPage, prevPage, handleUpdate, formData, setFormData, handleComplete}) => {
    return (
        <Box>
            <Typography variant='h2'>Sight Words</Typography>
            {Object.keys(sightWordSets).map(groupName => (
                <Box key={groupName}>
                    <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={sightWordSets[groupName]}
                        handleUpdate={handleUpdate}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </Box>
            ))}
            <FloatingFooter>
              <Button  variant="contained" component={Link} to="/manual-selection/other-parameters">Previous</Button>
              <Button  variant="contained" onClick={handleComplete} component={Link} to="/review-and-submit">Review</Button>
            </FloatingFooter>
        </Box>
    )
}

export default SightWords;