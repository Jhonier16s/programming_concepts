import React from "react";
import Title from "../Title/Title";
import style from "./Main.module.css";
import info from "../Utils/Info.json";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import c from "../../assets/c-.png";
import python from "../../assets/python.png";
import class_test from "../../assets/class_test.png";
import compliler_test from "../../assets/compiler_test.png";
import JAVA_poop from "../../assets/JAVA_poo.jpg";
import { Fade, Slide } from "react-awesome-reveal";
const Main = () => {
  const imgs = [js, c, python, java];
  return (
    <>
      <div className={style.main}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            flexDirection: "column",
          }}
        >
          <div className={style.info_container}>
            <h2>
              <Title
                h_id={"paradigms"}
                customFont={true}
                text="¿Que son los paradigmas de programación?"
              />
            </h2>
          
            <p
              style={{
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {info.module_1.concept}
            </p>
       
            
            <ul className={style.list}>
              {info.module_1.options.map((item, index) => {
                return (
                  <li key={index}>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                      }}
                    >
                      {item.value}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            flexDirection: "column",
          }}
        >
          <div className={style.info_container}>
            <h2>
              <Title
                h_id={"models"}
                customFont={true}
                text="Modelos de procesos en la construcción de software"
              />
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {info.module_2.concept}
            </p>
            {info.module_2.options.map((item, index) => {
              return (
                <div className={style.card} key={index}>
                  <h2>{item.title}</h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#050E1A",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            flexDirection: "column",
          }}
        >
          <div className={style.info_container}>
            <h2>
              <Title
                h_id={"languages"}
                customFont={true}
                text="Lenguajes de programación"
              />
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {info.module_3.concept}
            </p>
            {info.module_3.options.map((item, index) => {
              return (
                <div className={style.card_2} key={index}>
                  <h2>{item.title}</h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#fff",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="history"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          {info.module_4.map((item, index) => {
            return (
              <div
                id={item?.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  flexDirection: "column",
                  backgroundColor: "#050E1A",
                  padding: "2rem",
                  borderRadius: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <p
                    style={{
                      fontSize: "2rem",
                      color: item.color,
                    }}
                  >
                    {item.title}
                  </p>
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      marginLeft: "2rem",
                    }}
                    src={imgs[index]}
                    alt="img"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#fff",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
                <div id={item?.id_c}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#fff",
                    }}
                  >
                    Características
                  </p>
                </div>
                {item.options.map((item_2, index) => {
                  return (
                    <div
                      style={{
                        color: item.color,
                        boxShadow: `0 0 10px ${item.color}`,
                      }}
                      className={style.card_3}
                      key={index}
                    >
                      <h2>{item_2.title}</h2>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                        }}
                      >
                        {item_2.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Title
          h_id={"oop"}
          customFont={true}
          text="Programación orientada a objetos POO"
        />
        <div className={style.card_4}>
          <div className={style.card_4_text}>
            <p
              style={{
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {" "}
              La programación orientada a objetos (POO) es un paradigma de
              programación que se centra en el uso de objetos, que son
              instancias de clases, para resolver problemas. En POO, un objeto
              es una entidad que tiene propiedades y comportamientos, y las
              clases son las plantillas que definen la estructura y el
              comportamiento de un objeto. Java es un lenguaje de programación
              orientado a objetos y, por lo tanto, es una excelente opción para
              aprender y aplicar los conceptos de POO.
            </p>
            <img className={style.img_class} src={class_test} alt="img" />
            
          </div>
          <div>
            <img className={style.java_poo} src={JAVA_poop} alt="img" />
          </div>
        </div>
        <Title
          h_id={"compilation"}
          customFont={true}
          text="Proceso Compilación java"
        />
        <div className={style.card_4}>
          <div className={style.card_4_text}>
            <p
              style={{
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              {" "}
              El proceso de compilación de Java es el proceso de traducción de
              código fuente Java en código de máquina. El código de máquina es
              el lenguaje que entiende la CPU. El proceso de compilación de Java
              se realiza en tres pasos:{" "}
            </p>
            <img className={style.img_class} src={compliler_test} alt="img" />
          </div>
          <div>
            <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
            }}>
            
              <p
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                El programador escribe el código fuente en un archivo con
                extensión ".java".
              </p>
            </div>
            <div 
           style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
          }}>
              
              <p
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                El compilador de Java, que es una herramienta incluida en el kit
                de desarrollo de Java (JDK), lee el archivo fuente y lo traduce
                a un archivo binario con extensión ".class". Este archivo
                binario contiene código en lenguaje de bytes, que es el código
                de bajo nivel que la JVM puede ejecutar.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                Si el compilador encuentra errores de sintaxis o de otro tipo,
                muestra un mensaje de error y no genera el archivo binario.
              </p>
            </div>
            <div 
           style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
          }}>
            
              <p
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                Si el compilador encuentra errores de sintaxis o de otro tipo,
                muestra un mensaje de error y no genera el archivo binario.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
              }}
            >
            

              <p
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                Durante la ejecución del programa, la JVM carga el archivo
                binario en la memoria y lo ejecuta.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
              }}
            >

              <p>
                Es importante tener en cuenta que la compilación en Java es un
                proceso de dos pasos. El primer paso es la compilación del
                código fuente en un archivo binario, y el segundo paso es la
                ejecución del archivo binario en la JVM. Esto significa que un
                programa Java se puede escribir en cualquier plataforma, pero
                aún debe compilarse en un archivo binario específico para esa
                plataforma antes de ejecutarse. Además, es importante destacar
                que Java es un lenguaje de programación compilado y
                interpretado. Durante la compilación, el código fuente se
                compila a lenguaje de bytes, que es un código de bajo nivel,
                pero la JVM interpreta el código de bytes en tiempo de
                ejecución. Esta interpretación permite que el mismo archivo
                binario se ejecute en diferentes plataformas sin necesidad de
                volver a compilar el código fuente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Main;
