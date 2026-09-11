import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Products.module.css";
import { products } from "./productsData";
import OrderModal from "./OrderModal";
import ProductCard from "./ProductCard";

function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { invertors } = products;

    const handleOrderClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    if (invertors.length === 0) {
        return (
            <section id="products" className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">В этой категории пока нет товаров.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="products" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                    Наши товары и решения
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Подбираем оборудование под ваши задачи: от резервного питания до полной автономии.
                </p>

                <Swiper
                    style={{ "--swiper-navigation-size": "25px" }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-8"
                >
                    {invertors.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} onOrderClick={handleOrderClick} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {isModalOpen && selectedProduct && (
                <OrderModal
                    product={selectedProduct}
                    onClose={closeModal}
                />
            )}
        </section>
    );
}

export default Products;
