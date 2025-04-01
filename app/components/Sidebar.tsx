import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutDashboard,
    ShoppingBag,
    Menu,
    Users,
    LogOut,
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
                <Image
                    src="/bike-logo.svg"
                    alt="Burger"
                    width={28}
                    height={28}
                />
                <span className="font-semibold text-gray-800">Adventure Work</span>
            </div>

            {/* Menu */}
            <div className="px-4 py-6">
                <p className="text-xs font-semibold text-gray-400 mb-4 px-2">MENU</p>
                <nav className="space-y-1">
                    <Link href="/dashboard/home"
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

                <p className="text-xs font-semibold text-gray-400 mt-8 mb-4 px-2">OTHERS</p>
                <nav className="space-y-1">
                    <Link href="/dashboard/account"
                        className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <UserCircle size={20} />
                        <span>Cuenta</span>
                    </Link>
                    <Link href="/dashboard/help"
                        className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <HelpCircle size={20} />
                        <span>Ayuda</span>
                    </Link>
                    <Link href="/login"
                        className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <LogOut size={20} />
                        <span>Cerrar Sesión</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}