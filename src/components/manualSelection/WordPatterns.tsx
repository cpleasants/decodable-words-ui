import React from 'react';
import CheckboxGroup from "../common/CheckboxGroup/CheckboxGroup";
import { Button } from '@mui/material';
import FloatingFooter from '../common/styles/floatingFooter.style';
import { Link } from 'react-router-dom';
import { wordPatterns } from '../../constants'

interface WordPatternsProps {
  selected: Set<string>;
  setSelected: (selected: Set<string>) => void;
  includeFooter?: boolean;
}

const WordPatterns: React.FC<WordPatternsProps> = ({selected, setSelected, includeFooter = true}) => {
    return (
        <div>
            <CheckboxGroup 
            itemList={Object.keys(wordPatterns)}
            idList={Object.values(wordPatterns)}
            selected={selected}
            setSelected={setSelected}
            />
            {includeFooter && (
              <FloatingFooter>
                <Button variant="contained" component={Link} to="/manual-selection/letters">Next</Button>
              </FloatingFooter>
            )}
        </div>
    )
}

export default WordPatterns; 