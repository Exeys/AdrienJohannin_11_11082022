import './Rating.css'
import Full from '../../assets/fullstar.png'
import Empty from '../../assets/emptystar.png'
import Proptypes from 'prop-types'


function Rating({ value }) {

    const range = [1, 2, 3, 4, 5];


    return (
        <div>
            {range.map((rangeElement, i) =>
                <img key={i} src={value >= rangeElement ? Full : Empty} alt="star" />
            )}
        </div>
    )

}

Rating.propTypes = {
    value: Proptypes.number
}

export default Rating;