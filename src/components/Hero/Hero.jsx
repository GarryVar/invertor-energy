import Header from "../Header/Header"

function Hero() {
    return(
        <section className="relative">
            <Header/>
            {/* Заглушка картинки: замени на свою, например, "./assets/hero.jpg" */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-700"></div>
            <img
            src="./assets/hero-bg.jpg"
            alt="Энергосистема в частном доме"
            className="w-full h-[500px] object-cover opacity-90"
            />
            <div className="absolute inset-x-0 top-1/3 max-w-2xl px-4 text-center text-white z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Автономное энергоснабжение под ключ
            </h1>
            <p className="mb-6 max-w-lg mx-auto">
                Подберём, рассчитаем и смонтируем систему: инверторы, накопители, солнечные панели.
            </p>
            <button className="bg-yellow-600 text-gray-800 px-6 py-3 rounded font-bold hover:bg-yellow-300 transition">
                Рассчитать систему
            </button>
            </div>
      </section>
    )
}

export default Hero;