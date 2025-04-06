import React from 'react'
import letterSets from '../../constants/letterSets'
import letterCombinationSets from '../../constants/letterCombinationSets';
import sightWordSets from '../../constants/sightWordsSets';
import Level01 from './Level01';
import Level02 from './Level02';
import Level03 from './Level03';
import Level04 from './Level04';
import Level05 from './Level05';
import Level06 from './Level06';
import Level07 from './Level07';
import Level08 from './Level08';
import Level09 from './Level09';
import Level10 from './Level10';
import Level11 from './Level11';
import Level12 from './Level12';
import Level13 from './Level13';
import Level14 from './Level14';
import Level15 from './Level15';

const Levels = ({level, setLevel, formData, setFormData, nextPage}) => {

    const handleUpdate = (lev) => (event) => {
        const { checked } = event.target
        setLevel(checked ? lev : lev - 1)
    }

    const levels = {
        1: [...letterSets["First Letters"].map(id => `l_${id}`), "vc", "cvc"],
        2: letterSets["Second Letters"].map(id => `l_${id}`),
        3: letterSets["Last Letters"].map(id => `l_${id}`),
        4: [...sightWordSets["Pre-K"], "allow_double_consonants"],
        5: letterCombinationSets["Common Digraphs"],
        6: [...letterCombinationSets["Blends 1"], ...letterCombinationSets["Blends 2"]],
        7: [...letterCombinationSets["Suffixes 1"], ...sightWordSets["Kinder"]],
        8: letterCombinationSets["Suffixes 2"],
        9: letterCombinationSets["Blends 3"],
        10: ["cvce"],
        11: letterCombinationSets["Suffixes 3"],
        12: [...letterCombinationSets["Blends 4"], ...letterCombinationSets["Vowel Teams"]],
        13: letterCombinationSets["Other"],
        14: sightWordSets["First Grade"],
        15: ["cvcvc"]
    }

    const handleSubmit = () => {
        const idList = [];
        for (let i = 1; i <= level; i++) {
            idList.push(...levels[i])
        }
        setFormData(prev => ({
            ...prev, 
            ...Object.fromEntries(idList.map(id => [id, true])),
        }))
        console.log(formData)
        nextPage()
    }

    

    

    return (
        <div>
            <div className="checkbox-group-vertical">        
                <Level01 level={level} handleUpdate={handleUpdate}/>
                <Level02 level={level} handleUpdate={handleUpdate}/>
                <Level03 level={level} handleUpdate={handleUpdate}/>
                <Level04 level={level} handleUpdate={handleUpdate}/>
                <Level05 level={level} handleUpdate={handleUpdate}/>
                <Level06 level={level} handleUpdate={handleUpdate}/>
                <Level07 level={level} handleUpdate={handleUpdate}/>
                <Level08 level={level} handleUpdate={handleUpdate}/>
                <Level09 level={level} handleUpdate={handleUpdate}/>
                <Level10 level={level} handleUpdate={handleUpdate}/>
                <Level11 level={level} handleUpdate={handleUpdate}/>
                <Level12 level={level} handleUpdate={handleUpdate}/>
                <Level13 level={level} handleUpdate={handleUpdate}/>
                <Level14 level={level} handleUpdate={handleUpdate}/>
                <Level15 level={level} handleUpdate={handleUpdate}/>
            </div>
            <div className='button-footer'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        );
};

export default Levels;
