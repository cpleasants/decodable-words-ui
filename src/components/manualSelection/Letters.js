import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterSets from '../../constants/letterSets';
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter';

const Letters = ({nextPage, prevPage, handleUpdate, formData, setFormData}) => {
    return (
      <Box>
          <Typography variant="h2">Letter Sets</Typography>
          {Object.keys(letterSets).map(groupName => (
              <Box key={groupName}>
                  <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={letterSets[groupName]}
                        idList={letterSets[groupName].map(l => `l_${l}`)}
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

export default Letters;