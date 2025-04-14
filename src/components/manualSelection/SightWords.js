import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import sightWordSets from '../../constants/sightWordsSets'
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter';

const SightWords = ({nextPage, prevPage, handleUpdate, formData, setFormData}) => {
    return (
        <div>
            <h2>Sight Words</h2>
            {Object.keys(sightWordSets).map(groupName => (
                <div key={groupName}>
                    <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={sightWordSets[groupName]}
                        handleUpdate={handleUpdate}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
            ))}
            <FloatingFooter>
              <Button  variant="contained" onClick={prevPage}>Previous</Button>
              <Button  variant="contained" onClick={nextPage}>Next</Button>
            </FloatingFooter>
        </div>
    )
}

export default SightWords;