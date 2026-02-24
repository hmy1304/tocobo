import React from 'react'
import categories from '../util/cta'
import "./styles/Cta.scss"

const Cta = () => {
  return (
    <div className='inner cta-inner'>
      <ul className="cta-list">
        {categories.map((c)=>(
          <a href={c.id}>
            <div 
            className="img-wrap" 
            style={{backgroundImage:`url(${c.img.src})`}}>

            </div>
            <p>
              {c.name}
            </p>
          </a>
        ))}
      </ul>

    </div>
  )
}

export default Cta