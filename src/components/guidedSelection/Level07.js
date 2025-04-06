//  Level06 +  "Suffixes 1" + Kinder sight words
const Level07 = ({ level, handleUpdate }) => {
    return (
        <div key={`level07`}>
            <input
                type="checkbox"
                id={`level07`}
                checked={level >= 7}
                onChange={handleUpdate(7)}
            />
            <label htmlFor={`level07`}>
                <h3>Common Suffixes and More Sight Words</h3>
                <p><strong>New Patterns: </strong>CVCC with common suffix blends (-lp, -st, -ct, -pt, -sk, -lk, -lf, -xt, -ft, -nd, -mp, -lt, -nch)</p>
                <p><strong>New Sight Words: </strong>Kindergarten Sight Words</p>
            </label>
        </div>
    )
}

export default Level07