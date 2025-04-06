// Level 11 + "Blends 4" and "Vowel Teams"
const Level12 = ({ level, handleUpdate }) => {
    return (
        <div key={`level12`}>
            <input
                type="checkbox"
                id={`level12`}
                checked={level >= 12}
                onChange={handleUpdate(12)}
            />
            <label htmlFor={`level12`}>
                <h3>Vowel Blends and "y" Endings</h3>
                <p><strong>New Patterns: </strong>y-ending blends (ay, ow, oy) and vowel teams (ee, ea, ai, ay, oa, ow, igh)</p>
            </label>
        </div>
    )
}

export default Level12