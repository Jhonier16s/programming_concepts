import React from "react";
import Title from "../Title/Title";
import style from "./Main.module.css";
import info from "../Utils/Info.json";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import c from "../../assets/c-.png";
import python from "../../assets/python.png";
const Main = () => {
const imgs = [
    js,
    c,
    python,
    java

]
  return (
    <>
      <div className={style.main}>
        <div
        
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            flexDirection: 'column',

        }}
        >
          <div className={style.info_container} >
            <h2>
                <Title h_id={"paradigms"} customFont={true} text="¿Que son los paradigmas de programación?" />
            </h2>
            <p style={{
                fontSize: '1rem',
                color: "#fff",
            }}>
              {info.module_1.concept}
            </p>
            <ul className={style.list}  
            >
              {
                info.module_1.options.map((item, index) => {
                  return (
                    <li key={index}>
                      <p style={{
                        fontSize: '1rem',
                        color: "#fff",
                      }}>
                        {item.value}
                      </p>
                    </li>
                  );
                })
              }
                  
            </ul>

          </div>

        </div>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            flexDirection: 'column',

        }}
        >
          <div className={style.info_container} >
            <h2>
                <Title h_id={"models"} customFont={true} text="Modelos de procesos en la construcción de software" />
            </h2>
            <p style={{
                fontSize: '1rem',
                color: "#fff",
            }}>
              {info.module_2.concept}
            </p>
            {
              info.module_2.options.map((item, index) => {
                return (
                  <div
                   className={style.card}
                    key={index}>
                     <h2>{item.title}</h2> 
                    <p style={{
                      fontSize: '1rem',
                      color: "#050E1A",
                    }}>
                      {item.value}
                    </p>
                  </div>
                );
              })
            }
          </div>

        </div>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            flexDirection: 'column',

        }}
        >
          <div className={style.info_container} >
            <h2>
                <Title h_id={"languages"} customFont={true} text="Lenguajes de programación" />
            </h2>
            <p style={{
                fontSize: '1rem',
                color: "#fff",
            }}>
              {info.module_3.concept}
            </p>
            {
              info.module_3.options.map((item, index) => {
                return (
                  <div
                   className={style.card_2}
                    key={index}>
                     <h2>{item.title}</h2> 
                    <p style={{
                      fontSize: '1rem',
                      color: "#fff",
                    }}>
                      {item.value}
                    </p>
                  </div>
                );
              })
            }
          </div>

        </div>
         <div id="history" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
         }}>
         {
              info.module_4.map((item, index) => {
                return (
                  <div
                    id={item?.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "60%",
                    flexDirection: 'column',
                    backgroundColor: "#050E1A",
                    padding: '2rem',
                    borderRadius: '1rem',
                    marginBottom: '2rem',


                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      flexDirection: 'row',
                    }}>
                    <p style={{
                      fontSize: '2rem',
                      color: item.color,
                    }}>{item.title}</p>
                     <img style={{
                      height: "50px",
                      width: "50px",
                      marginLeft: '2rem',
                    }} src={imgs[index]} alt="img" />
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      flexDirection: 'row',

                    }}>
                   
                    
                    <p
                     style={{
                      fontSize: '1rem',
                      color: "#fff",
                     }}>{item.text}</p>
                    </div>
                   <div
                    id={item?.id_c}
                   >
                      <p style={{
                        fontSize: '1.5rem',
                        color: "#fff",
                      }}>Características</p>
                   </div>
                   {
                      item.options.map((item_2, index) => {
                        return (
                          <div
                          style={{
                            color: item.color,
                            boxShadow: `0 0 10px ${item.color}`,
                          }}
                           className={style.card_3}
                            key={index}>
                             <h2>{item_2.title}</h2> 
                            <p style={{
                              fontSize: '1rem',
                              color: "#fff",
                            }}>
                              {item_2.value}
                            </p>
                          </div>
                        );
                      })
                   }
                  </div>
                );
              })
            }
         </div>

      </div>
    </>
  );
};

export default Main;
