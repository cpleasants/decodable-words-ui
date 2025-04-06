// Level04 + "Common Digraphs" (mention CCVC and CVCC)
const Level05 = ({ level, handleUpdate }) => {
    return (
        <div key={`level05`}>
            <input
                type="checkbox"
                id={`level05`}
                checked={level >= 5}
                onChange={handleUpdate(5)}
            />
            <label htmlFor={`level05`}>
                <h3>Common Digraphs</h3>
                <p><strong>New Patterns: </strong>CVCC/CCVC with common digraphs (ck, sh, th, ch, wh, qu)</p>
            </label>
        </div>
    )
}

export default Level05