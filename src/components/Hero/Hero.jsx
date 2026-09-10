import { useState, useEffect } from "react";
import Header from "../Header/Header";
import HeroImage from "../../assets/image02.webp";
import styles from "./Hero.module.css";
import ContactForm from "../ContactForm/ContactForm";
import IconMenuClose from "../SvgIcons/IconMenuClose";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Блокируем скролл body, когда модалка открыта
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      // Важно: сохраняем текущую позицию скролла, чтобы после закрытия не «прыгало»
      const scrollPosition = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      // Возвращаем всё как было
      const scrollPosition = document.body.style.top
        ? parseInt(document.body.style.top.replace("px", ""), 10)
        : 0;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, -scrollPosition);
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return (
    <section className={styles.relative}>
      <img
        src={HeroImage}
        alt="Энергосистема в частном доме"
        className={`${styles.hero}`}
      />

      {/* Work in progress блок */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          position: "fixed",
          top: "40px",
          left: "40px",
          zIndex: 900,
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          textShadow: "0 0 7px black",
        }}
      >
        <code>Work in progress</code>
        <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>


      <div className="absolute inset-0">
        <Header />
      </div>

      <div
        className={`${styles.title} absolute inset-x-0 top-1/3 max-w-1xl lg:w-2xl px-4 text-center text-white z-10`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-normal animate__animated animate__fadeIn">
          Автономное энергоснабжение под ключ
        </h1>
        <p className="mb-8 text-2xl md:text-3xl lg:text-2xl mx-auto animate__animated animate__fadeIn">
          Подберём, рассчитаем и смонтируем систему: инверторы, накопители,
          солнечные панели.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="text-white py-3 px-4 rounded hover:bg-blue-700 transition font-medium"
        >
          Подберём систему
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div
            className={`${styles.modalWrapper} bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                className={`${styles.buttonClose}`}
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <IconMenuClose />
              </button>
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
