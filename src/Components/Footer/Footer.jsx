import React from 'react'
import style from './Footer.module.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
const Footer = () => {
  return (
   <>
        <div
            id='About'
        className={style.footer_container}>
            <div 
            
            style={{
                display: 'flex',
                justifyContent: 'space-araund',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'black',
                width: '100%',
                borderRadius: '10px',
            }}>
                <p>Todos los derechos reservados.</p>
                <p>Jhonier Stephan Becerra Sánchez</p>
                <div style={{
                  width: '100%',  
                  display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-araund',
                    alignItems: 'center',
                    flexDirection: 'row',
                   
                }}>
                    <a style={{marginRight:"15px"}} href="https://www.facebook.com/jhonier.j16" target="_blank" rel="noreferrer">
                        <img height={40} width={40} src={facebook} alt="facebook" />
                    </a>
                    <a style={{marginRight:"15px"}} href="https://www.instagram.com/jhonier16_s/" target="_blank" rel="noreferrer">
                        <img height={40} width={40} src={instagram} alt="instagram" />
                    </a>
                    <a style={{marginRight:"15px"}} href="https://www.linkedin.com/in/jhonier16s/" target="_blank" rel="noreferrer">
                        <img height={40} width={40} src={linkedin} alt="linkedin" />
                    </a>
                    {/* for gitbuh */}
                    <a style={{marginRight:"15px"}} href="https://github.com/Jhonier16s" target="_blank" rel="noreferrer">
                        <img height={40} width={40} src={github} alt="linkedin" />
                    </a>


                </div>
            </div>
                <p>2023</p>
            </div>
            
        </div>
   </>
  )
}

export default Footer
