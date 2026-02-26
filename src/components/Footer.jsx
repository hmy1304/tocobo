import React from 'react'
import {
  logoData, 
  companyData,
  customerCenterData, 
  socialLinks,
  footerMenus, 
  footerLegal} from "../util/footer"
import "./styles/Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className='inner footer-inner'>
        <div className="left">
          <h3>
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>
          <ul className="footer-list-1">
            {companyData.map((c, i)=>(
              <li key={i}>
                {c}             
              </li>
            ))}
          </ul>
          <div className="footer-legal">
            <p>
              {footerLegal.copyright}
            </p>
            <div className="legal-links">
              {footerLegal.links.map((l,i)=>(
                <a href={l.href} key={i}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu,i)=>(
              <div key={i}>
                <h4>{menu.title}</h4>
                <ul>
                  {menu.items.map((item,j)=>(
                    <li key={j}>
                      <a href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className='cus-wrap'>
            <h4>
              {customerCenterData.title}
            </h4>
            <div className="hidden">
              <p className="cs-box">
                <a href={customerCenterData.tel.href}>
                  {customerCenterData.tel.value}
                </a>
              </p>
              <p>{customerCenterData.hours}</p>
              <p>{customerCenterData.notice}</p>
              <a className='talk-btn' href={customerCenterData.talk.href}>
                {customerCenterData.talk.label}
              </a>
            </div>
          </div>
          <ul className='sns-links'>
            {socialLinks.map((sns)=>(
              <li key={sns.id}>
                <a href={sns.href} 
                target="_blank" 
                rel="noreferrer noopener"
                aria-label={sns.label} 
                title={sns.label}>
                  {React.createElement(sns.icon,{
                    size:22, "aria-hidden":true
                  })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer