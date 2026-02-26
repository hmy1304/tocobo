import React from 'react'
import instar from '../util/instar'
import "./styles/Instargram.scss"

const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Instargram
        </h2>
        <p className="txt">
          @tocobo_official
        </p>
      </div>
      <ul className="instar-list">
        {instar.map((i)=>(
          <li 
          className='instar-item'
          key={i.id}>
            <a 
            style={{backgroundImage:`url(${i.image})`}}
            alt={i.alt}
            href={i.link}>
              {i.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram