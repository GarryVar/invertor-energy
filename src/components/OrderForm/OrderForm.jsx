import styles from "./OrderForm.module.css";

function OrderForm({ formData, onFormChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={styles.orderInput}>
        <div className={styles.orderInputWrapper}>
          <label className="block text-sm font-medium text-gray-700">
            Ваше имя
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onFormChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Иван Иванов"
          />
        </div>
        <div className={styles.orderInputWrapper}>
          <label className="block text-sm font-medium text-gray-700">
            Телефон
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onFormChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+7 (999) 000-00-00"
          />
        </div>
      </div>

      <div className={styles.orderComments}>
        <div className={styles.orderInputWrapper}>
          <label className="block text-sm font-medium text-gray-700">
            Комментарий (необязательно)
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={onFormChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Например: доставка сегодня, нужен монтаж и т.п."
          />
        </div>
      </div>

      <button
        type="submit"
        className="py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors shadow-md w-full"
      >
        Заказать
      </button>
    </form>
  );
}

export default OrderForm;
