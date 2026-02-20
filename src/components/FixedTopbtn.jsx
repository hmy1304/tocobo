import React from 'react'
import "./styles/FixedTopBtn.scss"
import { useSmoothScroll } from '../hooks/useSomoothScroll'

const FixedTopbtn = () => {
  const scrollTo = useSmoothScroll()

  return (
    <div className='FixedTopbtn'>
        <button onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}>
            <img src="public\img\icon_top.svg" alt="" />
        </button>
        <a href="">
            TCB
        </a>
        <p>
            1:1 talk
        </p>
    </div>
  )
}

export default FixedTopbtn