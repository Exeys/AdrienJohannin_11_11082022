import './Rating.css'

const Rating = (props) => {

    const value = props.value;
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {range.map((rangeElement) =>
                value >= rangeElement ? <span key={rangeElement.toString()}>Etoile</span> : null
            )}
        </div>
    )

}

export default Rating;