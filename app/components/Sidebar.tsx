import Link from 'next/link';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Menu, 
  Users, 
  Settings, 
  CreditCard, 
  UserCircle, 
  HelpCircle 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#f8f2f8] h-screen fixed left-0 top-0 border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">G</span>
        </div>
        <span className="font-semibold text-gray-800">Adventure Work</span>
      </div>
      
      {/* Menu */}
      <div className="px-4 py-6">
        <p className="text-xs font-semibold text-gray-400 mb-4 px-2">MENU</p>
        <nav className="space-y-1">
          <Link href="/dashboard" 
            className="flex items-center gap-3 px-2 py-2 text-[#6366f1] bg-[#eff6ff] rounded-lg">
            <LayoutDashboard size={20} />
            <span>Home</span>
          </Link>
          <Link href="/dashboard/sales" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <ShoppingBag size={20} />
            <span>Ventas</span>
          </Link>
          <Link href="/dashboard/products" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Menu size={20} />
            <span>Productos</span>
          </Link>
          <Link href="/dashboard/customers" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Users size={20} />
            <span>Clientes</span>
          </Link>
        </nav>

        {/* <p className="text-xs font-semibold text-gray-400 mt-8 mb-4 px-2">OTHERS</p>
        <nav className="space-y-1">
          <Link href="/settings" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <Link href="/payment" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <CreditCard size={20} />
            <span>Payment</span>
          </Link>
          <Link href="/account" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <UserCircle size={20} />
            <span>Account</span>
          </Link>
          <Link href="/help" 
            className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <HelpCircle size={20} />
            <span>Help</span>
          </Link>
        </nav> */}
      </div>
    </aside>
  );
}