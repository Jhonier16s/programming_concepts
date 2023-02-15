import React from 'react'
import style from './Banner.module.css'
import programmer from '../../assets/programmer.svg'
const Banner = () => {
  return (
    <>
        <div id="Home" className={style.banner}>
            <div className={style.text_container}>
                <p className={style.welcome}>Bienvenidos!</p>
                <p style={{
                    fontSize: '30px',
                }}>Esta web, es un sitio informativo sobre la investigación planteada en la asignatura de programación.</p>
            </div>
            <div>
                <img className={style.img}  src={programmer} alt="programmer" />
            </div>
        </div>
    </>
  )
}

export default Banner