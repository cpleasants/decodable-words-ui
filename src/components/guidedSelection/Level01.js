// Letter set 1, CVC
const Level01 = ({ level, handleUpdate }) => {
    return (
        <div key={`level01`}>
            <input
                type="checkbox"
                id={`level01`}
                checked={level >= 1}
                onChange={handleUpdate(1)}
            />
            <label htmlFor={`level01`}>
                <h3>First Letters</h3>
                <p><strong>Letters: </strong>m, s, r, t, n, p, o, c, a, d</p>
                <p><strong>Pattern(s): </strong>VC, CVC Only</p>
            </label>
        </div>
    )
}

export default Level01