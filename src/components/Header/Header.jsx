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

// Вспомогательный компонент для ссылок — убирает дублирование кода
function NavLinks({ onClickClose, isMobile }) {
  const handleClick =
    isMobile && onClickClose ? () => onClickClose() : undefined;

  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={handleClick}
          className={
            isMobile
              ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-cyan-700 transition-colors"
              : "text-sm/6 md:text-md lg:text-lg font-semibold text-gray-800 hover:text-cyan-700 transition-colors"
          }
        >
          {item.name}
        </a>
      ))}
    </>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`${styles.header} absolute sticky top-0 z-50`}>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 gap-x-8 md:bg-transparent"
      >
        {/* Логотип */}
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

        {/* Кнопка мобильного меню (скрыта на lg+) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-end rounded-md p-2 lg:hidden ml-auto"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Открыть меню</span>
          {mobileMenuOpen ? <IconMenuClose /> : <IconMenu />}
        </button>

        {/* Десктопное меню (скрыто на мобильных) */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLinks />
        </div>
      </nav>

      {/* Мобильное меню — рендерится только когда открыто */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileMenu} lg:hidden`} id="mobile-menu">
          <div
            className={`${styles.mobileMenuWrapper} space-y-1 px-2 pt-2 pb-3 bg-white shadow-sm`}
          >
            <NavLinks onClickClose={() => setMobileMenuOpen(false)} isMobile />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
