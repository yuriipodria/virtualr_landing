import { useState } from "react";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg">
      <nav className="relative container mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <a href="#" className="flex shrink-0 cursor-pointer items-center">
            <img className="mr-2 h-10 w-10" src={logo} alt="logo" />

            <span className="text-xl tracking-tight">VirtualR</span>
          </a>

          <ul className="hidden gap-12 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-12 lg:flex">
            <button
              onClick={() => {
                alert("You’re being redirected to the login page");
              }}
              className="cursor-pointer rounded-md border px-3 py-2"
            >
              Sign In
            </button>

            <button
              className="cursor-pointer rounded-md bg-linear-to-r from-orange-500 to-orange-800 px-3 py-2"
              onClick={() => {
                alert("You’re being redirected to the registration page");
              }}
            >
              Create an account
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <>
              <div className="fixed top-[calc(100%+1px)] right-0 z-20 flex w-full flex-col gap-12 bg-neutral-900 p-12 lg:hidden">
                <ul className="flex flex-col items-center justify-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => {
                      alert("You’re being redirected to the login page");
                    }}
                    className="cursor-pointer rounded-md border px-3 py-2"
                  >
                    Sign In
                  </button>

                  <button
                    className="cursor-pointer rounded-md bg-linear-to-r from-orange-500 to-orange-800 px-3 py-2"
                    onClick={() => {
                      alert("You’re being redirected to the registration page");
                    }}
                  >
                    Create an account
                  </button>
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
