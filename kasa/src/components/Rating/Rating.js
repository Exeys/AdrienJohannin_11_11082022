import './Rating.css'
import Full from '../../assets/fullstar.png'
import Empty from '../../assets/emptystar.png'

function Rating({ value }) {

    const range = [1, 2, 3, 4, 5];

    return (
        <div>
            {range.map((rangeElement) =>
                <img src={value >= rangeElement ? Full : Empty} alt="star" />
            )}
        </div>
    )

}

export default Rating;