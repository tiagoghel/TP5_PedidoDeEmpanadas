import { useState } from 'react'
import './App.css';
import Formulario from './Formulario';
import Listado from './Listado';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contenedor-app">
    <div className="contenedor-principal">
      <div>
        <h1>Pedidos de Empanadas</h1>
        <Formulario count={count} setCount={setCount}/>
      </div>
      <div>
        <Listado count={count} setCount={setCount}/>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
