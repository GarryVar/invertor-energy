import styles from "./Products.module.css";
import { useState, useEffect, useRef } from "react";
import OrderForm from "../OrderForm/OrderForm";
import Features from "../Features/Features";
import IconFeaturesToggle from "../SvgIcons/IconFeatures";

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
      className={`${styles.orderModal} fixed inset-0 z-50 flex lg:items-center justify-center bg-black/60 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        className={`${styles.orderModalWrapper} no-scrollbar w-full max-w-4xl bg-white p-5 md:p-8 lg:p-10 rounded-xl shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`${styles.orderModalCloseBtn} text-gray-500 hover:text-gray-700 absolute top-6 right z-10`}
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className={styles.orderModalWrapperContent}>
          {/* Блок с выбранным товаром */}
          <div className={`${styles.orderProductWrapper} bg-gray-5`}>
            <div className={styles.orderProductStats}>
              <div className={styles.orderProductStatsWrapper}>
                <div className={styles.orderProductImage}>
                  <img
                    src={product.image}
                    width="160"
                    height="160"
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.orderProductStatsInner}>
                  <h3 className="font-semibold text-gray-800 text-1xl md:text-2xl  lg:text-3xl">
                    {product.title}
                  </h3>

                  <p className={styles.orderProductPriceSubTitle}>
                    {product.subtitle}
                  </p>

                  <div className={styles.orderFeatureToggleWrapper}>
                    <IconFeaturesToggle />
                    <button
                      onClick={toggleFeatures}
                      type="button"
                      className={`${styles.orderProductSpecifBtn} text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2`}
                    >
                      {isFeaturesVisible
                        ? "Скрыть характеристики"
                        : "Характеристики"}
                    </button>
                  </div>
                  <span
                    className={`${styles.orderProductPrice} font-bold text-1xl md:text-2xl  lg:text-2xl mt-4 block`}
                  >
                    {product.price.toLocaleString("ru-RU")}
                  </span>
                </div>
              </div>
              <Features
                styles={styles}
                featuresRef={featuresRef}
                product={product}
                isFeaturesVisible={isFeaturesVisible}
              />
            </div>
          </div>
          <OrderForm
            formData={formData}
            onFormChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
export default OrderModal;
