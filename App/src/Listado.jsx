const Listado = ({ pedidos }) => {

    const resumenPorGusto = pedidos.reduce((resumen, pedido) => {
      pedido.empanadas.forEach(emp => {
        if (!resumen[emp.gusto]) resumen[emp.gusto] = 0;
        resumen[emp.gusto] += parseInt(emp.cantidad);
      });
      return resumen;
    }, {});
  
    return (
      <div>
        <h2>Resumen General (por gusto)</h2>
        <ul>
          {Object.entries(resumenPorGusto).map(([gusto, cantidad]) => (
            <li key={gusto}>{gusto}: {cantidad}</li>
          ))}
        </ul>
  
        <hr />
  
        <h2>Pedidos por Persona</h2>
        {pedidos.map((pedido, index) => (
          <div key={index}>
            <h4>{pedido.nombre} ({pedido.sector})</h4>
            <ul>
              {pedido.empanadas.map((emp, i) => (
                <li key={i}>{emp.cantidad} de {emp.gusto}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
}
  
export default Listado;