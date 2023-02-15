import React from 'react'
import style from './Title.module.css'
const Title = ({text, customFont, h_id}) => {
  return (
    <>
        <div id={h_id} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            width: '100%',
            margin:"60px 0px"
            
        }}>
            <p style={{
                fontSize: customFont ? '2rem' : '75px',
            }} className={style.title}>{text}</p>
        </div>
    </>
  )
}

export default Title