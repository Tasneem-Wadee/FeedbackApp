
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import React from 'react'
function FeedbackList({feedback}){
   if(!feedback || feedback.length ===0){
       return <p>nothing yet</p>
   }
   
    return(
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
            <p className='p-para'> are you showing </p>
        </div>
    )
}

FeedbackList.propTypes ={
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
   
}

export default FeedbackList