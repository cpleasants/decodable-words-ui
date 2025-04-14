import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup";
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter';

const WordPatterns = ({nextPage, handleUpdate, formData}) => {
    
    // const handleNext = (e) => {
    //     e.preventDefault();
    //     nextPage();
    // }

    return (
        <div>
            <CheckboxGroup 
            itemList={["VC", "CVC", "CVCe", "CVCVC"]}
            idList={["vc", "cvc", "cvce", "cvcvc"]}
            handleUpdate={handleUpdate}
            formData={formData}
            />
            <FloatingFooter>
              <Button  variant="contained" onClick={nextPage}>Next</Button>
            </FloatingFooter>
        </div>
    )
}

export default WordPatterns;