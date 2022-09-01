import './Rating.css'
import Full from '../../assets/fullstar.png'
import Empty from '../../assets/emptystar.png'

function Rating({ type, value }) {

    const range = [1, 2, 3, 4, 5];
    const scaleType = type === 'full' ? '0' : '1'

    return (
        <div>
            {range.map((rangeElement) =>
                value >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
            )}
        </div>
    )

}

export default Rating;