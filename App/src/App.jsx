import { useState } from 'react'
import './App.css';
import Formulario from './Formulario';
import Listado from './Listado';

function App() {
  const [pedidos, setPedidos] = useState([]);

  const agregarPedido = (nuevoPedido) => {
    setPedidos([...pedidos, nuevoPedido]);
  };

  return (
    <div className="contenedor-app">
      <div className="contenedor-principal">
        <div>
          <h1>Pedidos de Empanadas</h1>
          <Formulario onAgregarPedido={agregarPedido} />
        </div>
        <div>
          <Listado pedidos={pedidos} />
        </div>
      </div>
    </div>
  );
}

export default App;