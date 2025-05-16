import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface CheckboxGroupProps {
  itemList: string[];
  idList?: string[];
  selected: Set<string>;
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ itemList, idList, selected, setSelected }) => {
    // if only an itemList is provided, automatically generate idList
    if (!idList) {
        idList = itemList;
    }

    if (itemList.length !== idList.length) {
        throw new Error("itemList and idList must be the same length");
    }

    const handleUpdate = (id: string) => {
      console.log(selected)
      console.log(id)
      // Remove from selected if it's already selected, or add if it isn't
      setSelected((prev:Set<string>) => {
        const newSelected:Set<string> = new Set(prev);
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