import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const leftMenuItems = [
    {
      title: 'Home',
      submenu: null
    },
    {
      title: 'Awards/Summit',
      submenu: ['Overview', 'Categories', 'Schedule']
    },
    {
      title: 'Our Partners',
      submenu: ['Strategic Partners', 'Healthcare Providers', 'Technology Partners']
    },
    {
      title: 'Medical Events',
      submenu: ['Upcoming Events', 'Past Events', 'Register']
    }
  ];

  const rightMenuItems = [
    {
      title: 'About',
      submenu: ['Our Mission', 'Leadership', 'History']
    },
    {
      title: '2024 Finalist',
      submenu: ['Current Finalists', 'Past Winners', 'Nomination Process']
    },
    {
      title: 'Gallery',
      submenu: null
    },
    {
      title: 'Contact',
      submenu: null
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left Menu */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="flex space-x-4">
              {leftMenuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button
                    className="text-[#2B2A29] hover:text-[#962326] px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors"
                    onMouseEnter={() => setActiveSubmenu(item.title)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown size={16} />}
                  </button>
                  
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-[#2B2A29] hover:bg-[#F2C849] hover:text-white transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://raw.githubusercontent.com/yourusername/yourrepo/main/logo.png"
              alt="AHEO Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            <div className="flex space-x-4">
              {rightMenuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button
                    className="text-[#2B2A29] hover:text-[#962326] px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors"
                    onMouseEnter={() => setActiveSubmenu(item.title)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown size={16} />}
                  </button>
                  
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-[#2B2A29] hover:bg-[#F2C849] hover:text-white transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2B2A29] hover:text-[#962326] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...leftMenuItems, ...rightMenuItems].map((item) => (
              <div key={item.title}>
                <button
                  className="w-full text-left text-[#2B2A29] hover:text-[#962326] px-3 py-2 text-base font-medium"
                  onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                >
                  <div className="flex justify-between items-center">
                    {item.title}
                    {item.submenu && <ChevronDown size={16} />}
                  </div>
                </button>
                
                {item.submenu && activeSubmenu === item.title && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-[#2B2A29] hover:text-[#962326]"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;