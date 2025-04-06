// Level03 + first sight words, include double-letters
const Level04 = ({ level, handleUpdate }) => {
    return (
        <div key={`level04`}>
            <input
                type="checkbox"
                id={`level04`}
                checked={level >= 4}
                onChange={handleUpdate(4)}
            />
            <label htmlFor={`level04`}>
                <h3>Sight Words and Double-Consonants</h3>
                <p><strong>New Pattern(s): </strong>Include double-consonants (e.g. "bell")</p>
                <p><strong>New Sight Words: </strong>Pre-K Sight Words</p>
            </label>
        </div>
    )
}

export default Level04