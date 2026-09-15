function OrderSuccessScreen() {
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

export default OrderSuccessScreen;
