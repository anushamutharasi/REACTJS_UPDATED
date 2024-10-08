import React from 'react'

const Input = ({...props}) => {
    
  return (
    //receving  props from app component to input component
    <div><input {...props}/>
    <input {...props}/>
    
    </div>
  )
}

export default Input