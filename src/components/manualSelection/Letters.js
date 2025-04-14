import CheckboxGroupWithToggle from '../common/CheckboxGroup/CheckboxGroupWithToggle';
import letterSets from '../../constants/letterSets';
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter';

const Letters = ({nextPage, prevPage, handleUpdate, formData, setFormData}) => {
    return (
        <div>
            <h2>Letter Sets</h2>
            {Object.keys(letterSets).map(groupName => (
                <div key={groupName}>
                    <CheckboxGroupWithToggle
                        groupName={groupName}
                        itemList={letterSets[groupName]}
                        idList={letterSets[groupName].map(l => `l_${l}`)}
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

export default Letters;