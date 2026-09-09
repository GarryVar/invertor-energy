import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  // ВСТАВЬ СЮДА СВОЙ КЛЮЧ ИЗ FORMTOEMAIL
  const FORMTOMAIL_API_KEY = "WuOr3joaIJ83dU5y";
  const FORMTOMAIL_URL = "https://api.formtomail.ru/send";

  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState("");

  const formatPhone = (raw) => {
    const digits = raw.replace(/\D/g, "");
    let cleaned = digits;
    console.log(cleaned);
    if (cleaned.startsWith("8")) cleaned = "7" + cleaned.slice(1);
    console.log(cleaned);
    if (cleaned.startsWith("7") && cleaned.length > 0) {
      const d = cleaned.slice(1);
      let formatted = "+7";
      if (d.length > 0) formatted += " (" + d.slice(0, 3);
      if (d.length >= 3) formatted += ") " + d.slice(3, 6);
      if (d.length >= 6) formatted += "-" + d.slice(6, 8);
      if (d.length >= 8) formatted += "-" + d.slice(8, 10);
      return formatted;
    }
    return raw;
  };

  const handlePhoneChange = (e) => setPhone(formatPhone(e.target.value));

  const validate = (formData) => {
    const errs = {};
    const name = formData.get("name")?.trim();
    const phoneClean = phone.replace(/\D/g, "");

    if (!name || name.length < 2) errs.name = "Введите имя";
    if (!phoneClean || phoneClean.length < 11)
      errs.phone = "Введите корректный телефон";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const payload = {
      title: "Новая заявка",
      body: {
        Имя: formData.get("name"),
        Телефон: phone,
        "Тип объекта": formData.get("object_type") || "не указан",
        Комментарий: formData.get("comment") || "без комментария",
        Страница: window.location.href,
      },
    };

    try {
      const res = await fetch(FORMTOMAIL_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${FORMTOMAIL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
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

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.Form} space-y-4 bg-white p-6 rounded-lg shadow-md`}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Заказать консультацию
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Заполните форму — мы перезвоним в течение 15 минут.
      </p>

      <div>
        <input
          name="name"
          placeholder="Ваше имя"
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-400" : "border-gray-300"}`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 (___) ___-__-__"
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-400" : "border-gray-300"}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <select
        name="object_type"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Тип объекта</option>
        <option value="Частный дом">Частный дом</option>
        <option value="Дача / коттедж">Дача / коттедж</option>
        <option value="Бизнес / офис">Бизнес / офис</option>
        <option value="Другое">Другое</option>
      </select>

      <textarea
        name="comment"
        placeholder="Площадь, нагрузка, пожелания…"
        rows="4"
        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition font-medium disabled:opacity-50"
      >
        {status === "submitting" ? "Отправляем…" : "Получить консультацию"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Ошибка отправки. Попробуйте позже.
        </p>
      )}

      <p className="text-xs text-gray-400 text-center">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  );
}
export default ContactForm;
