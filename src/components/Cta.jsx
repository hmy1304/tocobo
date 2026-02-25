import React, { useEffect} from 'react'
import categories from '../util/cta'
import "./styles/Cta.scss"
import AOS from "aos";
import "aos/dist/aos.css";

const Cta = () => {
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className='inner cta-inner'>
      <ul className="cta-list" data-aos="fade-up">
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