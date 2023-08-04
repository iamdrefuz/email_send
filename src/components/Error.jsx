/* eslint-disable react/prop-types */
const Error = (props) => {
    return (
      <div className="wrapper-error">
        <div className="error">
         
         <div>{props.text}</div>
         <div className="check-icon">
            
         </div>
      </div>
      </div>
    )
  }
  
  export default Error