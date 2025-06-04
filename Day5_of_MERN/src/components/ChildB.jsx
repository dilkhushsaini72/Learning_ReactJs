import React from 'react'
import ChildC from './ChildC'

const ChildB = () => {
  return (
    <div>
        <h2>
            <p>Child B</p>
            <ChildC />
        </h2>
    </div>
  )
}

export default ChildB