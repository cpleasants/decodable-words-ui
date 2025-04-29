import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterSets from '../../constants/letterSets';
import { Button, Box, Typography, Link } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link as RouterLink } from 'react-router-dom';

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
            <Button  variant="contained" component={RouterLink} to="/manual-selection/letters">Previous</Button>
            <Button  variant="contained" component={RouterLink} to="/manual-selection/other-parameters">Next</Button>
          </FloatingFooter>
      </Box>
  )
}

export default Letters;