import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <div>
        <h2>
            <p>Child A</p>
            <ChildB />
        </h2>
    </div>
  )
}

export default ChildA