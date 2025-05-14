import { useState } from "react";
const [formulario, setFormulario] = useState({
    nombre: '',
    sector: '',
    empanadas: [{ gusto: '', cantidad: '' }]
  });

  const agregarEmpanada = () => {
    setFormulario({
      ...formulario,
      empanadas: [...formulario.empanadas, { gusto: '', cantidad: '' }]
    });
  };

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmpanadaChange = (e, index) => {
    const { name, value } = e.target;
    const nuevasEmpanadas = [...formulario.empanadas];
    nuevasEmpanadas[index][name] = value;
    setFormulario({
      ...formulario,
      empanadas: nuevasEmpanadas
    });
  };
  
  

return(
<div>
      <form onSubmit={AgregarPedido}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
       <label>Selecciona una opción:</label>
        <select id="Sector" name="Sector"  
          value={formulario.fecha}
          onChange={handleChange}>
        <option value="opcion1">Sistemas </option>
        <option value="opcion2">Finanzas</option>
        <option value="opcion3">Ventas</option>
        <option value="opcion4">Recursos Humanos</option>
        <option value="opcion5">Soporte</option>
        <option value="opcion6">Depósito</option>
        </select>

        
  <h3>Empanadas</h3>
  {formulario.empanadas.map((empanada, index) => (
    <div key={index}>
      <label>Gusto:</label>
      <select
        name="gusto"
        value={empanada.gusto}
        onChange={(e) => handleEmpanadaChange(e, index)}
      >
        
        <option value="Carne">Carne</option>
        <option value="Pollo">Pollo</option>
        <option value="Jamón y Queso">Jamón y Queso</option>
        <option value="Humita">Humita</option>
        <option value="Capresse">Capresse</option>
      </select>

      <label>Cantidad:</label>
      <input
        type="number"
        name="cantidad"
        value={empanada.cantidad}
        onChange={(e) => handleEmpanadaChange(e, index)}
        min="1"
      />
    </div>
  ))}

  <button type="button" onClick={agregarEmpanada}>
    Agregar otra empanada
  </button>

        <button type="submit">Agregar pedido</button>
      </form>
</div>
)