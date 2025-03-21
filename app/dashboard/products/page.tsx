"use client"; // Habilitar el uso de hooks

import { useState } from "react";

export default function Home() {
  // Datos de ejemplo
  const products = [
    { id: 1, name: "Laptop", stock: 25, sold: 50 },
    { id: 2, name: "Teclado", stock: 15, sold: 30 },
    { id: 3, name: "Mouse", stock: 20, sold: 40 },
    { id: 4, name: "Monitor", stock: 10, sold: 25 },
    { id: 5, name: "Auriculares", stock: 18, sold: 35 },
    { id: 6, name: "Impresora", stock: 8, sold: 15 },
    { id: 7, name: "Tablet", stock: 12, sold: 22 },
    { id: 8, name: "Cámara", stock: 7, sold: 18 },
    { id: 9, name: "Micrófono", stock: 14, sold: 27 },
    { id: 10, name: "Router", stock: 9, sold: 20 },
  ];

  // Estado para el filtro de búsqueda
  const [search, setSearch] = useState("");

  // Filtrar productos según la búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calcular total de productos en inventario
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  // Ordenar productos más vendidos
  const bestSellers = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 p-6">
      {/* Cuadro de búsqueda con texto explicativo */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          ✨ Escribe el producto que necesitas:
        </label>
        <input
          type="text"
          placeholder="🔍 Buscar producto..."
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de productos filtrados */}
        <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">📦 Productos</h2>
          <ul className="space-y-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="border-b py-2 flex justify-between text-gray-600"
                >
                  <span>{product.name}</span>
                  <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No hay productos encontrados.</p>
            )}
          </ul>
        </div>

        {/* Total de productos en inventario */}
        <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">📊 Total en Inventario</h2>
          <p className="text-3xl font-bold text-blue-500">{totalStock}</p>
        </div>
      </div>

      {/* Separador elegante */}
      <div className="my-6 border-t border-gray-300"></div>

      {/* Productos más vendidos */}
      <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">🔥 Más Vendidos</h2>
        <ul className="space-y-2">
          {bestSellers.map((product) => (
            <li
              key={product.id}
              className="border-b py-2 flex justify-between text-gray-600"
            >
              <span>{product.name}</span>
              <span className="text-sm text-gray-500">Vendidos: {product.sold}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
