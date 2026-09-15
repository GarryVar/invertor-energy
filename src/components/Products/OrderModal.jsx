import styles from "./Products.module.css";
import { useState, useEffect, useRef } from "react";
import OrderForm from "../OrderForm/OrderForm";
import Features from "../Features/Features";
import IconFeaturesToggle from "../SvgIcons/IconFeatures";
import { useOrderSubmit } from "../../hooks/useOrderSubmit";
import { ProductZoom } from "./ProductZoom";

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
            title: `Заявка на ${product.title}`,
            body: {
                id: product.id,
                name: product.title,
                price: product.price,
            },
            customer: formData,
        };
        await submit(orderPayload);
    };
    if (status === "success") {
        return <OrderSuccessScreen />;
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
            <ProductZoom
                isOpen={isZoomed}
                image={product.image}
                title={product.title}
                onClose={() => setIsZoomed(false)}
            />

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
                                        onClick={() => setIsZoomed(true)}
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
