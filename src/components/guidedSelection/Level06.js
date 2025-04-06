// Level05 + "Blends 1" and "Blends 2"
const Level06 = ({ level, handleUpdate }) => {
    return (
        <div key={`level06`}>
            <input
                type="checkbox"
                id={`level06`}
                checked={level >= 6}
                onChange={handleUpdate(6)}
            />
            <label htmlFor={`level06`}>
                <h3>Common Blends</h3>
                <p><strong>New Patterns: </strong>CCVC with common blends (bl-, cl-, fl-, gl-, pl-, sl-, br-, cr-, dr-, fr-, gr-, pr-, tr-)</p>
            </label>
        </div>
    )
}

export default Level06