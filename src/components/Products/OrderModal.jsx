import styles from "./OrderModal.module.css";
import { useState, useEffect, useRef } from "react";
import OrderForm from "../OrderForm/OrderForm";
import Features from "../Features/Features";
import IconFeaturesToggle from "../SvgIcons/IconFeatures";
import { useOrderSubmit } from "../../hooks/useOrderSubmit";
import { ProductZoom } from "./ProductZoom";
import OrderSuccessScreen from "../OrderSuccessScreen/OrderSuccessScreen";

function OrderModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const featuresRef = useRef(null);

  const { submit, status } = useOrderSubmit();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      title: `Заявка на: ${product.title}`,
      body: {
        Название: product.title,
        Модель: product.model,
        Цена: product.price,
        Телефон: formData.phone,
        Имя: formData.name,
        Сообщение: formData.comment,
      },
    };
    await submit(orderPayload);
  };

  if (status === "success") {
    onClose();
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleFeatures = () => {
    const newState = !isFeaturesVisible;
    setIsFeaturesVisible(newState);
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
      className="fixed inset-0 z-50 flex  justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <ProductZoom
        isOpen={isZoomed}
        image={product.image}
        title={product.title}
        onClose={() => setIsZoomed(false)}
      />

      <div
        className={`${styles.orderModalWrapper} no-scrollbar bg-white`}
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
          <div className={`${styles.orderProductWrapper} bg-gray-5`}>
            <div className={styles.orderProductStats}>
              <div className={styles.orderLogoBrand}>
                <a
                  href={product.features.brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.features.brand.logo}
                </a>
              </div>
              <div className={styles.orderProductStatsWrapper}>
                <div className={styles.orderProductImage}>
                  <img
                    src={product.image}
                    width="160"
                    height="160"
                    alt={product.title}
                    loading="lazy"
                    onClick={() => setIsZoomed(true)}
                    className="cursor-pointer transition-transform hover:scale-105"
                  />
                </div>
                <div className={styles.orderProductStatsInner}>
                  <h3 className="font-semibold text-gray-800 text-2xl md:text-3xl lg:text-3xl">
                    {product.tool || ""} {product.title || ""}
                    <small>({product.model || ""})</small>
                  </h3>

                  <p className={styles.orderProductSubTitle}>
                    {product.subtitle}
                  </p>

                  <div className={styles.orderProductPurpose}>
                    {/* <span>{product.purpose.label || ""}</span> */}
                    <p>{product.purpose.value || ""}</p>
                  </div>

                  <button
                    onClick={toggleFeatures}
                    type="button"
                    className={`${styles.orderProductSpecifBtn} text-sm font-medium text-gray-700 hover:bg-gray-50`}
                  >
                    Характеристики
                    <div
                      className={`${styles.orderIconArrow} ${
                        isFeaturesVisible
                          ? styles.orderIconArrowUp
                          : styles.orderIconArrowDown
                      }`}
                    >
                      <IconFeaturesToggle />
                    </div>
                  </button>

                  <span
                    className={`${styles.orderProductPrice} font-bold text-1xl md:text-2xl lg:text-1md mt-4 block`}
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
