import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = () => {

    const [ratingValue, setRatingValue] = useState(0)

    console.log(ratingValue)

    const handleRating = (rate) => {
        setRatingValue(rate)
    }
    return (
        <Rating
            initialValue={0}
            onClick={handleRating}
            ratingValue={ratingValue}
            className='stars'
            showTooltip
            emptyStyle
            tooltipArray={['Terrible', 'Malo', 'Indiferente', 'Bueno', 'Excelente']}
        />
    )
}

export default StarRating