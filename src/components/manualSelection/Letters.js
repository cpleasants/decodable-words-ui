import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterSets from '../../constants/letterSets';
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';

const Letters = ({handleUpdate, formData, setFormData}) => {
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
            <Button  variant="contained" component={Link} to="/manual-selection/word-patterns">Previous</Button>
            <Button  variant="contained" component={Link} to="/manual-selection/letter-combinations">Next</Button>
          </FloatingFooter>
      </Box>
  )
}

export default Letters;