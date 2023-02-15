import React from 'react'
import Card from '../Cards/Card'
import style from './Content.module.css'
import image_1 from '../../assets/image_1.png'
import image_2 from '../../assets/image_2.png'
import image_3 from '../../assets/image_3.png'
import image_4 from '../../assets/image_4.png'
import image_5 from '../../assets/image_5.png'
import image_6 from '../../assets/image_6.png'
import image_7 from '../../assets/image_7.png'

import image_8 from '../../assets/image_8.png'


const obj = [{
    refCard: '#paradigms',
    imgCard: image_1,
    text: 'Paradigmas de programación.'
},
{
    refCard: '#models',
    imgCard: image_2,
    text: 'Modelo de procesos en la construcción de software.'
  },
  {
    refCard: '#languages',
    imgCard: image_3,
    text: 'Lenguajes de programación.'
  },
  {
    refCard: '#history',
    imgCard: image_4,
    text: 'Historia y características de Lenguajes de programación más importantes.'
  },
  {
    refCard: '#history_java',
    imgCard: image_5,
    text: 'Historia de Java.'
  },
  {
    refCard: '#features_java',
    imgCard: image_8,
    text: 'Características de Java.'
  },
    {
    refCard: '#oop',
    imgCard: image_6,
    text: 'Introducción a la Programación orientada a Objetos.'
    }
    ,{
    refCard: '#compilation',
    imgCard: image_7,
    text: 'Proceso de compilación.'
    }

]



const Content = () => {
  return (
    <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
           
            <div className={style.cards_container}>
              {/* Obj map, rellenar el objeto con los titulos, imagenes y referencias!  */}
                {obj.map((item, index) => { return <Card key={index} refCard={item.refCard} imgCard={item.imgCard} text={item.text} /> })}  
            </div>
            
        </div>
    </>
  )
}

export default Content