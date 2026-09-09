function Pain() {
  return (
    <section id="why" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Почему обычный генератор даже инверторный это не спасение?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Обычные решения не защищают от реальных угроз.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col p-8  rounded-lg hover:shadow-md  duration-300 bg-gray-50">
            <div className="text-4xl mb-4">🔌</div>
            <strong className="text-xl font-semibold text-gray-900 mb-3">
              Скачки напряжения
            </strong>
            <p>
              Дорогостоящая техника (ТВ, ПК, холодильники) сгорает за секунду
              из‑за обрыва нуля или грозы.
            </p>
          </div>

          <div className="flex flex-col p-8  rounded-lg hover:shadow-md  duration-300 bg-gray-50">
            <div className="text-4xl mb-4">❄️</div>
            <strong className="text-xl font-semibold text-gray-900 mb-3">
              Замерзший дом
            </strong>
            <p className="text-gray-600 ">
              Отключили свет зимой — встали газовый котёл и насосы отопления.
              Риск разморозки системы.
            </p>
          </div>

          <div className="flex flex-col p-8  rounded-lg hover:shadow-md duration-300 bg-gray-50">
            <div className="text-4xl mb-4">🏠</div>
            <strong className="text-xl font-semibold text-gray-900 mb-3">
              Домашний офис
            </strong>
            <p className="text-gray-600">
              Важные видеозвонки и дедлайны сорваны из‑за внезапного отключения
              электричества во всём районе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pain;
