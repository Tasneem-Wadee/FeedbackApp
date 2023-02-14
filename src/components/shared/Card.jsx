
import PropTypes from 'prop-types'

function Card({children, reverse}){
   return(
       //this is a conditional class below
       //<div className={`card ${reverse && 'reverse'}`}>{children} </div>
       
       <div className='card' style={{
           backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
           color: reverse ? '#fff' : '#000',
       }}>{children} </div>
   ) 
}

Card.defaultProps ={
    reverse: false,
}

Card.propTypes ={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card 