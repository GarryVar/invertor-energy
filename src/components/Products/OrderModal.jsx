import styles from "./Products.module.css";
import { useState, useEffect, useRef } from "react";
import OrderForm from "../OrderForm/OrderForm";
import Features from "../Features/Features";
import IconFeaturesToggle from "../SvgIcons/IconFeatures";

const FORMTOMAIL_API_KEY = "WuOr3joaIJ83dU5y";
const FORMTOMAIL_URL = "https://api.formtomail.ru/send";

function OrderModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const featuresRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      product: {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      },
      customar: formData,
    };
    try {
      const res = await fetch(FORMTOMAIL_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${FORMTOMAIL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok && data.statusCode === 200) {
        setStatus("success");
        e.target.reset();
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-green-50 rounded-lg border border-green-200 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Заявка отправлена!
        </h3>
        <p className="text-green-700 mb-4">
          Мы свяжемся с вами в ближайшее время.
        </p>
        <a
          href="tel:+79787737390"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Позвонить
        </a>
      </div>
    );
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
      className={`${styles.orderModal} fixed inset-0 z-50 flex lg:items-center justify-center bg-black/60 backdrop-blur-sm`}
      onClick={onClose}
    >
      {/* Лупа-overlay (большой просмотр) */}
      {isZoomed && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur"
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-8 right-8 text-white hover:text-gray-300"
          >
            ✕
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="max-w-[90vw] max-h-[85vh] object-contain drop-shadow-2xl rounded-xl"
          />
        </div>
      )}

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
                    onClick={() => setIsZoomed(true)} // <-- клик = лупа
                    className="cursor-pointer transition-transform hover:scale-105"
                  />
                </div>
                <div className={styles.orderProductStatsInner}>
                  <h3 className="font-semibold text-gray-800 text-1xl md:text-2xl lg:text-3xl">
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
                    className={`${styles.orderProductPrice} font-bold text-1xl md:text-2xl lg:text-2xl mt-4 block`}
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
