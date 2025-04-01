'use client';

import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShoppingBag, 
  CreditCard,
  Clock,
  CheckCircle,
  Truck,
  Package
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const userData = {
  name: "Juan Pérez",
  email: "juan.perez@example.com",
  phone: "+1 234 567 890",
  address: "Calle Principal 123, Ciudad, País",
  joinDate: "Enero 2022",
  totalOrders: 15,
  totalSpent: 2450.75,
  membership: "Premium"
};

const orderHistory = [
  { id: "#BK1001", date: "15 Mar 2023", product: "Mountain Bike Pro", amount: 599.99, status: "completed" },
  { id: "#BK1000", date: "28 Feb 2023", product: "Road Bike Elite", amount: 799.99, status: "completed" },
  { id: "#BK0999", date: "10 Feb 2023", product: "BMX Extreme", amount: 349.99, status: "shipped" },
  { id: "#BK0998", date: "25 Ene 2023", product: "Bike Helmet Pro", amount: 89.99, status: "processing" },
];

const activityData = [
  { name: 'Ene', activity: 3 },
  { name: 'Feb', activity: 5 },
  { name: 'Mar', activity: 4 },
  { name: 'Abr', activity: 2 },
  { name: 'May', activity: 6 },
  { name: 'Jun', activity: 3 },
];

export default function UserProfile() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            <CheckCircle className="mr-1" size={14} /> Completado
          </span>
        );
      case 'shipped':
        return (
          <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            <Truck className="mr-1" size={14} /> Enviado
          </span>
        );
      case 'processing':
        return (
          <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            <Clock className="mr-1" size={14} /> Procesando
          </span>
        );
      default:
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* User Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <User className="text-purple-600" size={40} />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-600">Miembro desde {userData.joinDate}</p>
            <span className="mt-2 inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
              {userData.membership}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-600">Órdenes</p>
              <p className="text-xl font-bold">{userData.totalOrders}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-600">Total Gastado</p>
              <p className="text-xl font-bold">${userData.totalSpent.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Info and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Información del Usuario</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-gray-500" size={18} />
              <span>{userData.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-gray-500" size={18} />
              <span>{userData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-500" size={18} />
              <span>{userData.address}</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">Métodos de Pago</h3>
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <CreditCard className="text-gray-500" size={18} />
            <span>Visa •••• 4242</span>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="activity" 
                  stroke="#8b5cf6" 
                  fill="#c4b5fd" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Historial de Órdenes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orden ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderHistory.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <Package size={16} className="text-gray-500" />
                      {order.product}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(order.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}