function Footer() {
  return (
    <footer id="about-us" className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <span className="block font-bold text-white mb-2">
              Энергия под Ключ
            </span>
            <p className="text-sm">
              Поставщик и монтажник энергетического оборудования.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mr-4 text-sm hover:text-white">
              О компании
            </a>
            <a href="#" className="mr-4 text-sm hover:text-white">
              Услуги
            </a>
            <a href="#" className="mr-4 text-sm hover:text-white">
              Каталог
            </a>
            <a href="#" className="text-sm hover:text-white">
              Политика конфиденциальности
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-sm">
            &copy; 2026 "Энергия под Ключ". Все права защищены.
          </div>
        </div>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/6aaa2f27f47e73248516e6ef?iframe=1"
          frameborder="0"
          name="ya-form-6aaa2f27f47e73248516e6ef"
          width="650"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
