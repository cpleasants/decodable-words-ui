// Level10 + "Suffixes 3"
const Level11 = ({ level, handleUpdate }) => {
    return (
        <div key={`level11`}>
            <input
                type="checkbox"
                id={`level11`}
                checked={level >= 11}
                onChange={handleUpdate(11)}
            />
            <label htmlFor={`level11`}>
                <h3>Long-Vowel Endings</h3>
                <p><strong>New Patterns: </strong>Long-vowel endings (-ild, -old, -ind, -olt, -ost)</p>
            </label>
        </div>
    )
}

export default Level11