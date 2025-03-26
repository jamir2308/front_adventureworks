"use client";  // Asegúrate de agregar esta directiva al principio del archivo

import { useEffect, useState } from "react";

export default function Sales() {
  const [salesData, setSalesData] = useState(null); // Estado para las ventas
  const [topProducts, setTopProducts] = useState([]); // Estado para los top productos
  const [regionIncome, setRegionIncome] = useState([]); // Estado para los ingresos por región
  const [topCustomers, setTopCustomers] = useState([]); // Estado para los clientes

  // Función para obtener los datos desde el backend
  const fetchSalesData = async () => {
    try {
      // Aquí haces la petición al backend (ajustar la URL)
      const response = await fetch("/api/sales"); // Asegúrate de que la URL sea la correcta
      const data = await response.json();

      // Asignamos los datos al estado
      setSalesData(data.sales);
      setTopProducts(data.topProducts);
      setRegionIncome(data.regionIncome);
      setTopCustomers(data.topCustomers);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  // Llamamos a la función para cargar los datos al montar el componente
  useEffect(() => {
    fetchSalesData();
  }, []); // Dependencia vacía significa que se ejecuta una vez al montar el componente

  return (
    <form className="bg-white text-gray-900 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Título principal */}
      <h1 className="text-4xl text-purple-800 font-semibold text-center mb-10">
        Ventas
      </h1>

      {/* Sección de ventas totales */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">
          Ventas totales - anuales y mensuales
        </h2>
        <div className="flex justify-between gap-4">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-400 focus:outline-none transition-all duration-300">
            Informe anual
          </button>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-400 focus:outline-none transition-all duration-300">
            Informe mensual
          </button>
        </div>
      </div>

      {/* Ventas totales */}
      <div className="mb-8">
        {/* <h2 className="text-2xl text-purple-700 font-semibold mb-4">
          Ventas totales: {salesData ? salesData.total : "Cargando..."}
        </h2> */}
      </div>

      {/* Top 10 productos */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">
          Top 10 productos más vendidos
        </h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          {/* {topProducts.length === 0 ? (
            <p className="text-center text-gray-600">Cargando...</p>
          ) : (
            // <ul>
            //   {topProducts.map((product, index) => (
            //     <li key={index} className="text-gray-600">{`${index + 1}. ${product.name} - ${product.sales} unidades`}</li>
            //   ))}
            // </ul>
          )} */}
        </div>
      </div>

      {/* Categoría de productos */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">
          Ventas por categoría de producto
        </h2>
        <label htmlFor="opciones" className="block text-lg text-gray-700 mb-3">
          Selecciona una opción:
        </label>
        <select
          id="opciones"
          name="opciones"
          className="w-full p-3 border-2 border-purple-400 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        >
          <option value="opcion1">Bicicletas</option>
          <option value="opcion2">Accesorios para bicicletas</option>
          <option value="opcion3">Piezas y componentes</option>
          <option value="opcion4">Mantenimiento y cuidado</option>
          <option value="opcion5">Ropa y calzado</option>
          <option value="opcion6">Bicicross y BMX</option>
          <option value="opcion7">Bicicletas para niños</option>
          <option value="opcion8">Cicloturismo y viajes</option>
          <option value="opcion9">Bicicletas de lujo o edición especial</option>
          <option value="opcion10">Otros productos</option>
        </select>
      </div>

      {/* Ingresos por región */}
      <div className="mb-8">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">
          Ingresos por región/país
        </h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          {/* {regionIncome.length === 0 ? (
            <p className="text-center text-gray-600">Cargando...</p>
          ) : (
            <ul>
              {regionIncome.map((region, index) => (
                <li key={index} className="text-gray-600">
                  {region.name}: ${region.income}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>

      {/* Clientes con más compras */}
      <div>
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">
          Clientes con más compras
        </h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          {/* {topCustomers.length === 0 ? (
            <p className="text-center text-gray-600">Cargando...</p>
          ) : (
            // <ul>
            //   {topCustomers.map((customer, index) => (
            //     <li key={index} className="text-gray-600">
            //       {customer.name}: {customer.purchases} compras
            //     </li>
            //   ))}
            // </ul>
          )} */}
        </div>
      </div>
    </form>
  );
}
