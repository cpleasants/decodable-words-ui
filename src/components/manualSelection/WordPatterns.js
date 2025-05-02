import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup";
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';

const WordPatterns = ({nextPage, handleUpdate, formData}) => {

    return (
        <div>
            <CheckboxGroup 
            itemList={["VC", "CVC", "CVCe", "CVCVC"]}
            idList={["vc", "cvc", "cvce", "cvcvc"]}
            handleUpdate={handleUpdate}
            formData={formData}
            groupName="word_patterns"
            />
            <FloatingFooter>
              <Button  variant="contained" component={Link} to="/manual-selection/letters">Next</Button>
            </FloatingFooter>
        </div>
    )
}

export default WordPatterns;