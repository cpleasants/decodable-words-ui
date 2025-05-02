import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const CheckboxGroup = ({ itemList, idList, selected, setSelected }) => {
    // if only an itemList is provided, automatically generate idList
    if (!idList) {
        idList = itemList;
    }

    if (itemList.length !== idList.length) {
        throw new Error("itemList and idList must be the same length");
    }

    const handleUpdate = (id) => {
      console.log(selected)
      console.log(id)
      // Remove from selected if it's already selected, or add if it isn't
      setSelected((prev) => {
        const newSelected = new Set(prev);
        newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id)
        return newSelected;
      })
    }


    return (
      <ToggleButtonGroup
        sx = {{ flexWrap:"wrap" }}
      >
        {idList.map((id, idx) =>  (
          <ToggleButton
            key={id}
            value={id}
            selected={selected.has(id)}
            onClick={() => handleUpdate(id)}
            sx={{ textTransform: 'none' }}
          >{itemList[idx]}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    )
}

export default CheckboxGroup;