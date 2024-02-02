import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Main from "./Components/Main/Main";
import Navbar from "./Components/NavBar/Navbar";
import Title from "./Components/Title/Title";
import style from "./App.module.css";
import up_arrow from "./assets/up_arrow.png";
import Footer from "./Components/Footer/Footer";
import { Fade, Slide, Hinge, Flip } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import Test from "./Components/test";
function App() {

  return (
    <>
       <a  href="#content" className={style.button}>
        <p style={{
          margin: "0px"
        }}>Ir al contenido testing</p>
        <img style={{
          marginLeft: "5px",
        }} src={up_arrow} alt="up_arrow" className={style.up_arrow}/>
       </a>
      <Navbar/>
      <Slide cascade={true} triggerOnce={true} direction="down" duration={1000}>
       <Banner/>
      </Slide>
      <Title text={"Tabla de contenido"} h_id="content"/>
      <Content/>
       <Main/>
       <Test/>
      <Footer/>
    </>
  );
}

export default App;
