import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
  const utilIcon =headerData.label
  return (
    <ul>
      {utilIcon.map((label)=>(
        <li key={label.id}> 
          <img src={label.src} alt={label.alt} />
        </li>
      ))}
    </ul>
  )
}

export default Util