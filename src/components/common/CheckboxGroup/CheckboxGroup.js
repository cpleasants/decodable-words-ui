import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const CheckboxGroup = ({ itemList, idList, handleUpdate, formData, groupName }) => {
    // if only an itemList is provided, automatically generate idList
    if (!idList) {
        idList = itemList;
    }

    if (itemList.length !== idList.length) {
        throw new Error("itemList and idList must be the same length");
    }


    return (
      <ToggleButtonGroup
        value={formData[groupName]}
        onChange={handleUpdate(groupName)}
        sx = {{ flexWrap:"wrap" }}
      >
        {idList.map((id, idx) =>  (
          <ToggleButton
            key={id}
            value={id}
            sx={{ textTransform: 'none' }}
          >{itemList[idx]}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    )
}

export default CheckboxGroup;