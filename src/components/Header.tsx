import { useState } from "react";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg">
      <nav className="relative container mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 items-center">
            <img
              className="mr-2 h-10 w-10"
              src="/src/assets/logo.png"
              alt="logo"
            />

            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <ul className="hidden gap-12 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-12 lg:flex">
            <a href="#" className="rounded-md border px-3 py-2">
              Sign In
            </a>

            <a
              href="#"
              className="rounded-md bg-linear-to-r from-orange-500 to-orange-800 px-3 py-2"
            >
              Create an account
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <>
              <div className="fixed top-full right-0 z-20 flex w-full flex-col gap-8 bg-neutral-900 p-12 lg:hidden">
                <ul className="flex flex-col items-center justify-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center gap-6">
                  <a href="#" className="rounded-md border px-3 py-2">
                    Sign In
                  </a>

                  <a
                    href="#"
                    className="rounded-md bg-linear-to-r from-orange-500 to-orange-800 px-3 py-2"
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
