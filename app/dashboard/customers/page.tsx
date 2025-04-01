export default function Clients() {
  return (
    <form className="bg-white text-gray-900 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Título principal */}
      <h1 className="text-4xl text-purple-800 font-semibold text-center mb-10">
        Clientes
      </h1>

      {/* Sección de clientes totales */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">Clientes totales - anuales y mensuales</h2>
        <div className="flex justify-between gap-4">
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 focus:outline-none transition-all duration-300">
            Informe anual
          </button>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 focus:outline-none transition-all duration-300">
            Informe mensual
          </button>
        </div>
      </div>

      {/* Top 10 clientes */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">Top 10 clientes con más compras</h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          <p className="text-center text-gray-600">Aquí se mostrarán los clientes con más compras.</p>
        </div>
      </div>

      {/* Clientes por región */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">Clientes por región/país</h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          <p className="text-center text-gray-600">Aquí se mostrarán los clientes según su región o país.</p>
        </div>
      </div>

      {/* Tipo de clientes */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">Tipo de clientes</h2>
        <label htmlFor="tipoClientes" className="block text-lg text-gray-700 mb-3">Selecciona una opción:</label>
        <select
          id="tipoClientes"
          name="tipoClientes"
          className="w-full p-3 border-2 border-purple-400 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        >
          <option value="frecuentes">Clientes frecuentes</option>
          <option value="nuevos">Clientes nuevos</option>
          <option value="mayoristas">Clientes mayoristas</option>
          <option value="empresas">Empresas</option>
          <option value="otros">Otros</option>
        </select>
      </div>

      {/* Clientes inactivos */}
      <div>
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">Clientes inactivos</h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          <p className="text-center text-gray-600">Aquí se mostrarán los clientes que no han realizado compras recientes.</p>
        </div>
      </div>
    </form>
  );
}
