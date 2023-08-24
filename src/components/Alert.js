import React from 'react'

function Alert(props) {
  return (
    <div className='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>{props.alert}</strong>
      
    </div>
  )
}

export default Alert
