import React from 'react'

const Button = ({children ,  className= '' , ...props}) => {
    console.log(children);
    
  return (
   <button className={`main-btn ${className}`} {...props}>
    {children}
    </button>
  )
}

export default Button
