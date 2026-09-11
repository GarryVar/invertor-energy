import styles from "./Products.module.css";

export function ProductCard({ product, onOrderClick }) {
    const handleCardClick = () => {
        onOrderClick(product);
    };

    return (
        <div
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleCardClick();
                }
            }}
            className={`${styles.productItem} group overflow-hidden hover:shadow-md transition-all duration-300 bg-white rounded-xl cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none`}
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover bg-gray-100"
                loading="lazy"
            />
            <div className="p-6">
                {product.badge && (
                    <span
                        className={`${styles.productBadge} inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wide mb-3`}
                    >
                        {product.inStock ? "В наличии" : "Нет в наличии"}
                    </span>
                )}
                <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                    {product.title}
                </h3>
                <div
                    className={`${styles.productItemOrder} flex justify-between items-center mt-4`}
                >
                    <span className="font-bold text-lg text-gray-800">{product.price}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
