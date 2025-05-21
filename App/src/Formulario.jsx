import { useState } from "react";

const Formulario = ({ onAgregarPedido }) => {
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

  const AgregarPedido = (e) => {
    e.preventDefault();
    if (!formulario.nombre || !formulario.sector) {
      alert("Por favor, completá el nombre y el sector.");
      return;
    }

    onAgregarPedido(formulario);
    setFormulario({
      nombre: '',
      sector: '',
      empanadas: [{ gusto: '', cantidad: '' }]
    });
  };

  return (
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
        <select
          name="sector"
          value={formulario.sector}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          <option value="Sistemas">Sistemas</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Ventas">Ventas</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Soporte">Soporte</option>
          <option value="Depósito">Depósito</option>
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
              <option value="">Seleccione</option>
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
  );
}

export default Formulario;
