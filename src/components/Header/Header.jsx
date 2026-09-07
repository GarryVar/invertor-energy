import { useState } from "react";
import IconMenu from "../SvgIcons/IconMenu";
import IconMenuClose from "../SvgIcons/IconMenuClose";

const navigation = [
  { name: "Главная", href: "#home" },
  { name: "Почему это нужно", href: "#why" },
  { name: "Установки", href: "#installations" },
  { name: "О нас", href: "#about" },
  { name: "Вопросы-Ответы", href: "#faq" },
];

function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return(
     <header className="bg-mist-50 absolute inset-x-0 shadow-sm sticky top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 gap-x-8">
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
            <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2  md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Открыть меню</span>
            
            {mobileMenuOpen ?   <IconMenuClose/>: <IconMenu/>}
            
          </button>
          <div className={`hidden md:flex md:gap-x-12 ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600">
                {item.name}
              </a>
            ))}
          </div>
          {/* <a href="tel:+79990000000" className="bg-blue-600 text-white  px-4 py-2 rounded">
            Заказать звонок
          </a> */}
        </nav>
        <div 
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
            id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
     </header>   
    )
}

export default Header;