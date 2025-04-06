// Letter sets 1 and 2, CVC
const Level02 = ({ level, handleUpdate }) => {
    return (
        <div key={`level02`}>
            <input
                type="checkbox"
                id={`level02`}
                checked={level >= 2}
                onChange={handleUpdate(2)}
            />
            <label htmlFor={`level02`}>
                <h3>Second Letters</h3>
                <p><strong>New Letters: </strong>g, f, b, k, i, l, h, w</p>
            </label>
        </div>
    )
}

export default Level02