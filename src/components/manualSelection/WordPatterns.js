import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup";
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';
import { wordPatterns } from '../../constants'

const WordPatterns = ({selected, setSelected}) => {

    return (
        <div>
            <CheckboxGroup 
            itemList={Object.keys(wordPatterns)}
            idList={Object.values(wordPatterns)}
            selected={selected}
            setSelected={setSelected}
            />
            <FloatingFooter>
              <Button  variant="contained" component={Link} to="/manual-selection/letters">Next</Button>
            </FloatingFooter>
        </div>
    )
}

export default WordPatterns;