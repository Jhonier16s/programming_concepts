import React from 'react'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
        <div className={style.container}>
            <div>
                    JhonierDev16
            </div>
            <div className={style.container_options}>
                <ul className={style.list}>
                    <a href='#home' className={style.option}>Inicio</a>
                    <a href='#content' className={style.option}>Tabla de contenido</a>
                    <a href="#About" className={style.option}>Acerca de</a>
                </ul>

            </div>
        </div>
    </>
  )
}

export default Navbar