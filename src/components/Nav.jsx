import React, { useState } from "react";

const navItems = [
  { titulo: "Misión y Visión", url: "#Mision_Vision" },
  { titulo: "Roles", url: "#Roles" },
  { titulo: "Nuestros Servicios", url: "#Servicios" },
  { titulo: "Contacto", url: "#Contacto" },
];

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav
        className="fixed top-0 z-20 w-full p-3 backdrop-blur-2xl"
        data-aos="zoom-in-down"
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <a
            title="TecnoConecta Logo"
            aria-label="TecnoConecta Logo"
            href="https://tecno-conecta-sitio-web-oficial.vercel.app/"
            className="flex items-center space-x-3 h-14 w-28 rtl:space-x-reverse"
          >
            <picture>
              <img
                title="Logo Original - TecnoConecta"
                className="h-[45px] w-auto"
                src="/img/TecnoConecta_Logo_Original.webp"
                alt="Logo Original - TecnoConecta"
                aria-label="Logo Original - TecnoConecta"
                loading="lazy"
              />
            </picture>
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <a
              title="Contacto"
              aria-label="Contacto"
              href="#Contacto"
              className="transform rounded-md border border-slate-200 bg-white px-5 py-3 font-medium text-black hover:bg-[#006068] active:hover:text-[#006068] focus:hover:text-[#006068] hover:border-none hover:text-white sm:w-auto border-b-4 hover:border-0 duration-200 delay-200"
            >
              Contactanos
            </a>
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-12 p-2 rounded-xl h-13 md:hidden lg:hidden hover:animate-fade animate-duration-1000 animate-delay-100 animate-ease-in-out"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              aria-label="Abrir el Menu"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6h16"></path>
                <path d="M7 12h13"></path>
                <path d="M10 18h10"></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 font-bold rtl:space-x-reverse md:flex-row md:mt-0">
              {navItems.map(({ titulo, url }, index) => (
                <li key={index}>
                  <a
                    key={index}
                    title={titulo}
                    href={url}
                    className="block py-2 px-3 text-black hover:text-[#006068] active:hover:text-[#006068] focus:hover:text-[#006068] bg-transparent hover:animate-fade animate-duration-1000 animate-delay-100 animate-ease-in-out"
                    aria-current="page"
                  >
                    {titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {menuVisible && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full px-4 py-6 overflow-y-auto backdrop-blur-2xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="https://tecno-conecta-sitio-web-oficial.vercel.app/"
                className="h-12 w-28 -m-1.5 p-1.5"
              >
                <picture>
                  <img
                    title="Logo Original - TecnoConecta"
                    className="h-[45px] w-auto"
                    src="/img/TecnoConecta_Logo_Original.webp"
                    alt="Logo Original - TecnoConecta"
                    aria-label="Logo Original - TecnoConecta"
                    loading="lazy"
                  />
                </picture>
              </a>
              <button
                aria-label="Cerrar el Menu"
                onClick={toggleMenu}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-lg text-black hover:animate-fade animate-duration-1000 animate-delay-100 animate-ease-in-out"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navItems.map(({ titulo, url }, index) => (
                    <a
                      key={index}
                      title={titulo}
                      href={url}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-[#006068] hover:animate-fade animate-duration-1000 animate-delay-100 animate-ease-in-out"
                    >
                      {titulo}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
