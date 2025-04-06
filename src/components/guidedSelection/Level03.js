// All letters, CVC, VC
const Level03 = ({ level, handleUpdate }) => {
    return (
        <div key={`level03`}>
            <input
                type="checkbox"
                id={`level03`}
                checked={level >= 3}
                onChange={handleUpdate(3)}
            />
            <label htmlFor={`level03`}>
                <h3>All Letters</h3>
                <p><strong>New Letters: </strong>e, v, j, u, y, z, x, q</p>
            </label>
        </div>
    )
}

export default Level03