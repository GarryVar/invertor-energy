import MaxLogo from "../SvgIcons/MaxLogo";
import TelegramLogo from "../SvgIcons/TelegramLogo";
import VkLogo from '../SvgIcons/VkLogo';
import InstaLogo from'../SvgIcons/InstaLogo';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <section className={`${styles.contacts} py-12 bg-white`}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Контакты</h2>
            <div className="space-y-4 text-gray-600">
              <p>📍 Евпатория, ул. Чапаева 69</p>
              <p>📞 +7 (999) 000-00-00</p>
              <p>✉️ info@energosvoboda.ru</p>
              <p>🕒 Пн–Пт: 08:30–17:30</p>
            </div>
            <div className="mt-6 space-x-4 flex">
              <a href="#" className="text-blue-600 hover:underline">
                <InstaLogo/>
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                <TelegramLogo/>
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                 <MaxLogo/>
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                <VkLogo/>
              </a>
            </div>
          </div>
          {/* Карта (пример iframe) */}
          <div className="h-[300px] bg-gray-200 rounded overflow-hidden border border-gray-300">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=33.351266,45.209250&z=15"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      </section>
    )
}

export default Contacts;