/* eslint-disable react/prop-types */
import {BsCheck2Circle} from 'react-icons/bs'
const Succsess = (props) => {
  return (
   <div className="wrapper-succsess">
     <div className="succsess">
       
       <div>{props.text}</div>
       <div className="check-icon">
           <BsCheck2Circle/>
       </div>
    </div>
   </div>
  )
}

export default Succsess