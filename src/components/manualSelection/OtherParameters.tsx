import React from 'react';
import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup"
import { Button, Box, Typography } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';
import { otherParameters } from '../../constants'

interface OtherParametersProps {
  selected: Set<string>;
  setSelected: (selected: Set<string>) => void;
  includeFooter?: boolean;
}

const OtherParameters: React.FC<OtherParametersProps> = ({selected, setSelected, includeFooter = true}) => {
    return (
        <Box>
            <Typography variant='h2'>Other Parameters</Typography>
            <CheckboxGroup 
                itemList={Object.keys(otherParameters)}
                idList={Object.values(otherParameters)}
                selected={selected}
                setSelected={setSelected}
            />
            {includeFooter && (
              <FloatingFooter>
                <Button  variant="contained" component={Link} to="/manual-selection/letter-combinations">Previous</Button>
                <Button  variant="contained" component={Link} to="/manual-selection/sight-words">Next</Button>
              </FloatingFooter>
            )}
        </Box>
    )
}

export default OtherParameters 