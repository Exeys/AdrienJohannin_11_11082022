import './Rating.css'
import FullRating from '../../assets/star.svg'
import EmptyRating from '../../assets/star2.svg'

function Rating({ type, value }) {

    const range = [1, 2, 3, 4, 5];
    const scaleType = type === 'full' ? 'star1' : 'star2'

    return (
        <div>
            {range.map((rangeElement) =>
                value >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
            )}
        </div>
    )

}

export default Rating;