// Level08 + "Blends 3"
const Level09 = ({ level, handleUpdate }) => {
    return (
        <div key={`level09`}>
            <input
                type="checkbox"
                id={`level09`}
                checked={level >= 9}
                onChange={handleUpdate(9)}
            />
            <label htmlFor={`level09`}>
                <h3>Less Common Blends</h3>
                <p><strong>New Patterns: </strong>CCVC with less common blends (sc-, shr-, sk-, sm-, sn-, sp-, squ-, st-, sw-)</p>
            </label>
        </div>
    )
}

export default Level09