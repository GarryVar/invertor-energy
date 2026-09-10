import styles from "./Products.module.css";
import productImage from "../../assets/products/pv183224.webp";
import productImage2 from "../../assets/products/ph1116KL3eu.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: "a3f9c2d7",
    title: "Инвертор гибридный MUST 3 кВт PV18-3224-VPM I (1 фаза)",
    subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
    image: productImage,
    inStock: false,
    features: [
      "Для котла отопления, Для ИБП",
      "Номинальная мощность — 3 кВт, 3000 Вт",
      "Контроллер заряда — MPPT (МППТ)",
      "Мощность солнечных батарей — 3000 Вт",
      "Максимальное входное напряжение от СБ — 500 В",
      "Напряжение аккумуляторов — 24 В",
      "Подмешивание в сеть — Есть",
      "Работа без АКБ — Да",
      "Экспорт в сеть — Нет",
    ],
    price: "от 145 000 ₽",
    badge: "Хит продаж",
  },
  {
    id: "8b4e1k9m",
    title: "Инвертор гибридный MUST 6 кВт PV18-6048 PRO (1 фаза)",
    subtitle: "Готовое решение под ключ: панели, инвертор, АКБ, монтаж",
    image: productImage,
    inStock: true,
    features: [
      "Полная автономность дома",
      "Экономия на счетах за электричество",
      "Гарантия 5 лет на оборудование",
      "Быстрый монтаж за 1 день",
    ],
    price: "от 290 000 ₽",
    badge: "Лучшее решение",
  },
  {
    id: "z5p7q3w2",
    title: "Инвертор гибридный MUST 6 кВт PV18-6048 PRO (1 фаза)",
    subtitle: "Гибрид: резервное питание + солнечная генерация",
    image: productImage,
    inStock: false,
    features: [
      "Два режима работы: сеть/солнце",
      "Защита от скачков напряжения",
      "Компактное размещение",
      "Подходит для дачи и дома",
    ],
    price: "по запросу",
    badge: "Новинка",
  },
  {
    id: "n9x1v8t4",
    title: "Гибридный инвертор MUST 10 кВт MUST PV19-10048 EXP",
    subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
    image: productImage,
    inStock: false,
    features: [
      "Для котла отопления, Для ИБП",
      "Номинальная мощность — 3 кВт, 3000 Вт",
      "Контроллер заряда — MPPT (МППТ)",
      "Мощность солнечных батарей — 3000 Вт",
      "Максимальное входное напряжение от СБ — 500 В",
      "Напряжение аккумуляторов — 24 В",
      "Подмешивание в сеть — Есть",
      "Работа без АКБ — Да",
      "Экспорт в сеть — Нет",
    ],
    price: "от 145 000 ₽",
    badge: "Хит продаж",
  },
  {
    id: "x5Dx1ve7V",
    title: "Трехфазный гибридный солнечный инвертор MUST PH11-16KL3-EU 16кВт",
    subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
    image: productImage2,
    inStock: false,
    features: [
      "Для котла отопления, Для ИБП",
      "Номинальная мощность — 3 кВт, 3000 Вт",
      "Контроллер заряда — MPPT (МППТ)",
      "Мощность солнечных батарей — 3000 Вт",
      "Максимальное входное напряжение от СБ — 500 В",
      "Напряжение аккумуляторов — 24 В",
      "Подмешивание в сеть — Есть",
      "Работа без АКБ — Да",
      "Экспорт в сеть — Нет",
    ],
    price: "от 145 000 ₽",
    badge: "Хит продаж",
  },
];

function Products() {
  const renderCard = (p) => (
    <div
      className={`${styles.productItem} group overflow-hidden hover:shadow-md transition-all duration-300 bg-white rounded-xl`}
    >
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-48 object-cover bg-gray-100"
      />
      <div className="p-6">
        {p.badge && (
          <span
            className={`${styles.productBadge} inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wide mb-3`}
          >
            {p.inStock ? "В наличии" : "Нет в наличии"}
          </span>
        )}
        <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
          {p.title}
        </h3>
        <div
          className={`${styles.productItemOrder} flex justify-between items-center mt-4`}
        >
          <span className="font-bold text-lg text-gray-800">{p.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );

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
          style={{ '--swiper-navigation-size': '25px' }}
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
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              {renderCard(p)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;

