import styles from "./Products.module.css";
import { useState, useEffect, useRef } from "react";
import OrderForm from "../OrderForm/OrderForm";

function OrderModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  // Состояние для видимости характеристик
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  // Ссылка на блок с характеристиками (для автопрокрутки)
  const featuresRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправить заказ:", { product, formData });
    alert("Заказ отправлен! Мы свяжемся с вами.");
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const rows = Object.values(product.features || {});

  // Логика переключения
  const toggleFeatures = () => {
    const newState = !isFeaturesVisible;
    setIsFeaturesVisible(newState);

    // Если открыли характеристики — скроллим к ним внутри модалки
    if (newState && featuresRef.current) {
      featuresRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      className={`${styles.orderModal} fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        className={`${styles.orderModalWrapper} no-scrollbar w-full max-w-4xl bg-white p-10 rounded-xl shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`${styles.orederModalCloseBtn} text-gray-500 hover:text-gray-700 absolute top-6 right-6 z-10`}
          aria-label="Закрыть"
        >
          ✕
        </button>

        {/* Блок с выбранным товаром */}
        <div className={`${styles.orderProductWrapper} p-4 bg-gray-5`}>
          <div className={styles.orderProductImage}>
            <img
              src={product.image}
              width="160"
              height="160"
              alt={product.title}
              loading="lazy"
            />
          </div>
          <div className={styles.orderProductStats}>
            <h3 className="font-semibold text-gray-800">{product.title}</h3>
            <p
              className={`${styles.orderProductSubTitle} text-sm text-gray-600 line-clamp-2`}
            >
              {product.subtitle}
            </p>

            {/* Кнопка переключения */}
            <button
              onClick={toggleFeatures}
              type="button"
              className={`${styles.orderProducSpecifBtn} mt-2 inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isFeaturesVisible ? "Скрыть характеристики" : "Характеристики"}
            </button>

            <span
              className={`${styles.orderProductPrice} font-bold text-lg mt-4 block`}
            >
              {product.price.toLocaleString("ru-RU")}
            </span>

            {/* Блок характеристик (условный рендер + анимация) */}
            <div
              ref={featuresRef}
              className={`${styles.orderProducSpecif} ${isFeaturesVisible ? "features-visible" : "features-hidden"}`}
              style={{
                maxHeight: isFeaturesVisible ? "1000px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease-out, opacity 0.3s",
              }}
            >
              <table className={styles.featuresTable}>
                <thead>
                  <tr>
                    <th>Характеристика</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((item) => (
                    <tr key={item.label}>
                      <td data-label={item.label}>{item.label}</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <OrderForm
          formData={formData}
          onFormChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default OrderModal;
