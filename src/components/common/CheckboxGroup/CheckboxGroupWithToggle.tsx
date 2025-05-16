import React from 'react';
import CheckboxGroup from "./CheckboxGroup";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";

interface CheckboxGroupWithToggleProps {
  groupName: string;
  itemList: string[];
  idList?: string[];
  selected: Set<string>;
  setSelected: (selected: Set<string>) => void;
} // TODO: should I make this a common interface for the checkbox group with and without toggle? Only difference is this one has groupName. May be a way to combine them more efficiently to reduce redundancy.

const CheckboxGroupWithToggle: React.FC<CheckboxGroupWithToggleProps> = ({ groupName, itemList, idList, selected, setSelected }) => {
    if (!idList) {
        idList = itemList;
    }

    if (itemList.length !== idList.length) {
        throw new Error("itemList and idList must be the same length");
    }

    const allSelected = idList.every(id => selected.has(id));

    
    const handleToggleCheckboxGroup = () => {
      const nowAllSelected = !allSelected;

      setSelected((prev) => {
        const newSelected = new Set(prev);

        if (nowAllSelected) {
          idList.forEach(id => newSelected.add(id));
        } else {
          idList.forEach(id => newSelected.delete(id));
        }

        return newSelected;
      });
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
            selected={selected}
            setSelected={setSelected}
          />
      </FormGroup>
    )
}

export default CheckboxGroupWithToggle 