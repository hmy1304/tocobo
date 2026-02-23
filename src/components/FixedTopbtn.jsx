import React from 'react'
import "./styles/FixedTopBtn.scss"
import { useSmoothScroll } from '../hooks/useSomoothScroll'

const FixedTopbtn = () => {
  const scrollTo = useSmoothScroll()

  return (
    <div className='FixedTopbtn'>
        <button 
        className='top-btn'
        onClick={(e)=>{
            e.preventDefault()
            scrollTo('hero')
        }}>
           
        </button>
        <a href="#" className='talk-btn'>
            TCB
        </a>
        <p>
            1:1 talk
        </p>
    </div>
  )
}

export default FixedTopbtn