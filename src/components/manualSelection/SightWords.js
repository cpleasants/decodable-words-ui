import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import sightWordSets from '../../constants/sightWordsSets'
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter';

const SightWords = ({nextPage, prevPage, handleUpdate, formData, setFormData}) => {
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
              <Button  variant="contained" onClick={prevPage}>Previous</Button>
              <Button  variant="contained" onClick={nextPage}>Next</Button>
            </FloatingFooter>
        </Box>
    )
}

export default SightWords;