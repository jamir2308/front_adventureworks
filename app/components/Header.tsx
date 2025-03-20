import { Search, Bell } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 pr-10 py-2 bg-[#f8f2f8] rounded-lg focus:outline-none"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <Bell className="text-gray-600" size={20} />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
            <Image
              src="/burger-icon.png"
              alt="Burger"
              width={20}
              height={20}
              className="opacity-70"
            />
          </div>
          <span className="text-sm text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}