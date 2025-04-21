import React from 'react'

const Input = ({label , ...props}) => {

  return (
    <div className='form-content'>
     <label htmlFor={props.id} >{label}</label> 
     <input {...props}/>
    </div>
  
  )
}

export default Input
