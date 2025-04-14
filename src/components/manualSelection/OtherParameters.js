import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup"
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter';

const OtherParameters = ({nextPage, prevPage, handleUpdate, formData}) => {
    return (
        <div>
            <h2>Other Parameters</h2>
            <CheckboxGroup 
                itemList={["Long Vowels", "Soft Consonants", "Alternative Vowel Sounds", "Double Consonants", "Silent E"]}
                idList={["allow_long_vowels", "allow_soft_consonants", "allow_alt_vowels", "allow_double_consonants", "allow_silent_e"]}
                handleUpdate={handleUpdate}
                formData={formData}
            />
            <FloatingFooter>
              <Button  variant="contained" onClick={prevPage}>Previous</Button>
              <Button  variant="contained" onClick={nextPage}>Next</Button>
            </FloatingFooter>
        </div>
    )
}

export default OtherParameters