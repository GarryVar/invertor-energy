import styles from "./Products.module.css";
import { useState, useEffect } from 'react';

function OrderModal({ product, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Тут будет отправка: Formspree / FormToEmail / свой бэкенд
        console.log('Отправить заказ:', {
            product: product,
            formData: formData,
        });

        alert('Заказ отправлен! Мы свяжемся с вами.');
        onClose();
    };


    // Закрытие по Esc (опционально, но удобно)
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        }
    }, [])

    return (
        <div
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            className={`${styles.orderModal} fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm`}
            onClick={onClose}
        >
            <div
                className={`${styles.orderFormWrapper} no-scrollbar w-full max-w-4xl h-full h-full bg-white p-10 rounded-xl shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    onClick={onClose}
                    className={`${styles.orederModalCloseBtn} text-gray-500 hover:text-gray-700`}
                    aria-label="Закрыть"
                >
                    ✕
                </button>

                {/* Блок с выбранным товаром — сразу видно, что заказывают */}
                <div className={`${styles.orderProductWrapper} p-4 bg-gray-50 border border-gray-100 rounded-md mb-6`}>
                    <div className={styles.orderProductImage}>
                        <img src={product.image} width="160px" height="160px" alt={product.title} />
                    </div>
                    <div className={styles.orderProductStats}>
                        <h3 className="font-semibold text-gray-800 mb-1">{product.title}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.subtitle}</p>
                        <span className="font-bold text-blue-700 text-lg">
                            {product.price.toLocaleString('ru-RU')} ₽
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ваше имя</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Иван Иванов"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Телефон</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+7 (999) 000-00-00"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Комментарий (необязательно)</label>
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Например: доставка сегодня, нужен монтаж и т.п."
                        />
                    </div>

                    <button
                        type="submit"
                        className="py-3  bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors shadow-md"
                    >
                        Заказать
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrderModal;
