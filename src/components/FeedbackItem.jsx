
//import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
function FeedbackItem({item, handleDelete}) {
 
 
 /*const handleClick = (id) => {
   console.log(id)
   alert('Clicked on x_id delete')
 }
 */
  return (
    <>
    <Card >
      <div className="num-display"> {item.rating}</div>
    <button onClick={() => handleDelete(item.id)} className='close'> x </button> 
      <div className="text-display"> {item.text}</div>
      
    </Card>
    
    </>
  );
}

FeedbackItem.propTypes ={
    item: PropTypes.object.isRequired,  
}

export default FeedbackItem;
