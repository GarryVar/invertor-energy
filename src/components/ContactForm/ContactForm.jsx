import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // ВСТАВЬ СЮДА СВОЙ FORMSPREE URL
    const url = 'https://formspree.io/f/ТВОЙ_ID';

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 bg-green-50 rounded border border-green-200 text-green-700 text-center">
        Спасибо! Мы свяжемся с вами в ближайшее время.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-2xl space-y-4 bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Заказать консультацию</h3>
      <input
        name="name"
        placeholder="Ваше имя"
        required
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="phone"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        required
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="object_type"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Тип объекта</option>
        <option value="house">Частный дом</option>
        <option value="cottage">Дача / коттедж</option>
        <option value="business">Бизнес / офис</option>
        <option value="other">Другое</option>
      </select>
      <textarea
        name="comment"
        placeholder="Площадь, нагрузка, пожелания…"
        rows="4"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition font-medium"
      >
        Получить консультацию
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center mt-2">
          Ошибка отправки. Попробуйте позже или позвоните нам.
        </p>
      )}
    </form>
  );
}

export default ContactForm;