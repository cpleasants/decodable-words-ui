import CheckboxGroup from "./CheckboxGroup";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";

const CheckboxGroupWithToggle = ({ itemList, idList, groupName, handleUpdate, formData, setFormData }) => {
    if (!idList) {
        idList = itemList;
    }

    if (itemList.length !== idList.length) {
        throw new Error("itemList and idList must be the same length");
    }

    const selectedIds = formData[groupName] || [];
    const allSelected = idList.every(id => selectedIds.includes(id));

    
    const handleToggleCheckboxGroup = (event) => {
      const nowAllSelected = !allSelected

      setFormData(prev => ({
        ...prev,
        [groupName]: nowAllSelected ? idList : null
      }));

    };


    return (
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleToggleCheckboxGroup} checked={allSelected} />}
          label={`${groupName}`}
        />
          <CheckboxGroup 
            itemList={itemList} 
            idList={idList} 
            handleUpdate={handleUpdate}
            formData={formData}
            groupName={groupName}
          />
      </FormGroup>
    )
}

export default CheckboxGroupWithToggle