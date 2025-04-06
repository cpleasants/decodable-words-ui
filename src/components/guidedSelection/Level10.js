// Level09 + CVCe and VCe
// TODO: VCe
const Level10 = ({ level, handleUpdate }) => {
    return (
        <div key={`level10`}>
            <input
                type="checkbox"
                id={`level10`}
                checked={level >= 10}
                onChange={handleUpdate(10)}
            />
            <label htmlFor={`level10`}>
                <h3>Magic E (CVCe)</h3>
                <p><strong>New Patterns: </strong>CVCe</p>
            </label>
        </div>
    )
}

export default Level10