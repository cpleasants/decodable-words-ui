// Level13 + 1st Grade Sight Words
const Level14 = ({ level, handleUpdate }) => {
    return (
        <div key={`level14`}>
            <input
                type="checkbox"
                id={`level14`}
                checked={level >= 14}
                onChange={handleUpdate(14)}
            />
            <label htmlFor={`level14`}>
                <h3>More Sight Words</h3>
                <p><strong>New Sight Words: </strong>1st Grade Sight Words</p>
            </label>
        </div>
    )
}

export default Level14