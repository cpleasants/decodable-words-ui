import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterSets from '../../constants/letterSets';
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';

const Letters = ({selected, setSelected, includeFooter = true}) => {
    return (
      <Box>
          <Typography variant="h2">Letter Sets</Typography>
          {Object.keys(letterSets).map(groupName => (
              <Box key={groupName}>
                  <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={letterSets[groupName]}
                        idList={letterSets[groupName].map(l => `l_${l}`)}
                        selected={selected}
                        setSelected={setSelected}
                    />
              </Box>
          ))} 
          {includeFooter && (
            <FloatingFooter>
              <Button  variant="contained" component={Link} to="/manual-selection/word-patterns">Previous</Button>
              <Button  variant="contained" component={Link} to="/manual-selection/letter-combinations">Next</Button>
            </FloatingFooter>
          )}
      </Box>
  )
}

export default Letters;