// Level14 + CVCVC
const Level15 = ({ level, handleUpdate }) => {
    return (
        <div key={`level15`}>
            <input
                type="checkbox"
                id={`level15`}
                checked={level >= 15}
                onChange={handleUpdate(15)}
            />
            <label htmlFor={`level15`}>
                <h3>CVCCVC Words (e.g. napkin)</h3>
                <p><strong>New Patterns: </strong>CVCCVC words including all previous blends and digraphs</p>
            </label>
        </div>
    )
}

export default Level15