import { useState } from "react";
import IconMenu from "../SvgIcons/IconMenu";
import IconMenuClose from "../SvgIcons/IconMenuClose";

import styles from "./Header.module.css";

const navigation = [
  { name: "Главная", href: "#home" },
  { name: "Почему это нужно", href: "#why" },
  { name: "Установки", href: "#installations" },
  { name: "О нас", href: "#about" },
  { name: "Вопросы-Ответы", href: "#faq" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} absolute sticky top-0 z-50`}>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 gap-x-8 md:bg-transparent"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Кнопка меню: видна на sm/md, скрыта на lg+ */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-end rounded-md p-2 lg:hidden ml-auto"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Открыть меню</span>
          {mobileMenuOpen ? <IconMenuClose /> : <IconMenu />}
        </button>

        {/* Десктопное меню: скрыто на sm/md, видно на lg+ */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 md:text-md lg:text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Мобильное выпадающее меню: управляется состоянием + принудительно скрыто на md+ */}
      <div
        className={`${styles.mobileMenu} lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <div
          className={`${styles.mobileMenuWrapper} space-y-1 px-2 pt-2 pb-3 bg-white shadow-sm`}
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
