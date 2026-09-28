import { useState } from "react";
import IconMenu from "../SvgIcons/IconMenu";
import IconMenuClose from "../SvgIcons/IconMenuClose";
import styles from "./Header.module.css";

const navigation = [
  { name: "Главная", href: "#home" },
  { name: "Почему это нужно", href: "#why" },
  { name: "Товары", href: "#products" },
  { name: "О нас", href: "#about-us" },
];

// Вспомогательный компонент для ссылок — убирает дублирование кода
function NavLinks({ onClickClose, isMobile }) {
  const handleClick = useCallback(() => {
    if (isMobile && onClickClose) {
      onClickClose();
    }
  }, [isMobile, onClickClose]);

  return navigation.map((item) => (
    <li key={item.name} className={isMobile ? "block" : undefined}>
      <a
        href={item.href}
        onClick={isMobile ? handleClick : undefined}
        className={
          isMobile
            ? "block px-3 py-2 rounded-md text-base font-bold  transition-colors"
            : "text-sm/6 md:text-md lg:text-lg font-semibold  transition-colors"
        }
      >
        {item.name}
      </a>
    </li>
  ));
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`${styles.header} z-50`}>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 gap-x-8 md:bg-transparent"
      >
        {/* Логотип */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Здесь будет логотип" src="" className="h-8 w-auto" />
          </a>
        </div>

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
        <ul className={`${styles.headerNavMenu} hidden lg:flex lg:gap-x-12`}>
          <NavLinks />
        </ul>
      </nav>

      {/* Мобильное меню — рендерится только когда открыто */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileMenu} lg:hidden`} id="mobile-menu">
          <ul
            className={`${styles.mobileMenuWrapper} space-y-1 px-2 pt-2 pb-3 bg-white shadow-sm`}
          >
            <NavLinks onClickClose={() => setMobileMenuOpen(false)} isMobile />
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
