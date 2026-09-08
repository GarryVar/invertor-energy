import Header from "../Header/Header";
import HeroImage from "../../assets/image02.webp";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.relative}>
      <img
        src={HeroImage}
        alt="Энергосистема в частном доме"
        className={`${styles.hero}`}
      />
      <div
        style={{
          display: "flex",
          gap: "20px",
          position: "fixed",
          top: "40px",
          left: "40px",
          zIndex: "900",
          color: "white",
          fontwEight: "bold",
          fontSize: "20px",
          textShadow: "0 0 7px black",
        }}
      >
        <code>Work in progress</code>
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="absolute inset-0 ">
        <Header />
      </div>
      <div
        className={`${styles.title} absolute inset-x-0 top-1/3 max-w-2xl px-4 text-center text-white z-10`}
      >
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 leading-normal animate__animated animate__fadeIn">
          Автономное энергоснабжение под ключ
        </h1>
        <p className="mb-8 text-1xl md:text-3xl lg:text-2xl mx-auto animate__animated animate__fadeIn">
          Подберём, рассчитаем и смонтируем систему: инверторы, накопители,
          солнечные панели.
        </p>
        <button className="border-3 text-white px-6 py-3 rounded font-bold bg-transparent hover:text-gray-900 transition shadow-2xs">
          Рассчитать систему
        </button>
      </div>
    </section>
  );
}

export default Hero;
