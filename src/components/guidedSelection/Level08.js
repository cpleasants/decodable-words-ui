// Level07 + "Suffixes 2"
const Level08 = ({ level, handleUpdate }) => {
    return (
        <div key={`level08`}>
            <input
                type="checkbox"
                id={`level08`}
                checked={level >= 8}
                onChange={handleUpdate(8)}
            />
            <label htmlFor={`level08`}>
                <h3>More Suffixes (ng/nk)</h3>
                <p><strong>New Patterns: </strong>CVCC with ng/nk suffix blends (-ing, -ang, -ong, -ung, -ank, -ink, -onk, -unk)</p>
            </label>
        </div>
    )
}

export default Level08