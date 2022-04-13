import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //HOOk
  //const [variable,metodo] = useState(valorInicial);

  const [opcion, setOpcion] = useState("hoteles");
  const [data, setData] = useState([]);
  //efectos secundarios , tienen dos parametros
  //useEffect(callback,[variable])
  let url = "https://pruebagcd.herokuapp.com/";
  useEffect(() => {
    const api = async () => {
      const response = await fetch(url + opcion);
      const json = await response.json();
      setData(json);
    };
    api();
    //solo se lleva a cabo cuando se modifica opcion va en el []
  }, [opcion]);
  const cambiarOpcion = () => {
    if (opcion === "hoteles") {
      setOpcion("paquetes");
    } else if (opcion === "paquetes") {
      setOpcion("ofertas");
    } else setOpcion("hoteles");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <button className="btn btn-danger my-5" onClick={cambiarOpcion}>
            Cambiar Opcion
          </button>
        </div>
        <div className="col-6">
          <ul className='my-5' type="none">
            {data.map((opcion, index) => {
              return <li key={index + opcion.nombre}>{opcion.nombre}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
