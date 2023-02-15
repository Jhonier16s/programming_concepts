import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Main from "./Components/Main/Main";
import Navbar from "./Components/NavBar/Navbar";
import Title from "./Components/Title/Title";
import style from "./App.module.css";
import up_arrow from "./assets/up_arrow.png";
function App() {

  return (
    <div className="App">
       <a  href="#content" className={style.button}>
        Ir al contenido
        <img style={{
          marginLeft: "5px",
        }} height={20} width={20} src={up_arrow} alt="up_arrow" className={style.up_arrow}/>
       </a>
      <Navbar/>
      <Banner/>
      <Title text={"Tabla de contenido"} h_id="content"/>
      <Content/>
    <Main/>
    </div>
  );
}

export default App;
