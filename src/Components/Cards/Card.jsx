import React from 'react'

import style from './Card.module.css'
const Card = ({ refCard, imgCard, text }) => {
  return (
    <>
        <a style={{
            textDecoration: 'none',
            color: 'black',
        }} href={refCard}>
        <div className={style.card_container}>
            <div hre className={style.text_content}>
                <img src={imgCard} alt="img" />
                <p className={style.text}>{text}</p>
            </div>
        </div>
        </a>
    </>
  )
}

export default Card