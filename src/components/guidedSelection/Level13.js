// Level 12 + "Other"
const Level13 = ({ level, handleUpdate }) => {
    return (
        <div key={`level13`}>
            <input
                type="checkbox"
                id={`level13`}
                checked={level >= 13}
                onChange={handleUpdate(13)}
            />
            <label htmlFor={`level13`}>
                <h3>Advanced Blends/Silent Letters</h3>
                <p><strong>New Patterns: </strong>More blends (wr-, kn-, ph-, gh-, gn-, -mb, -tch, -dge)</p>
            </label>
        </div>
    )
}

export default Level13