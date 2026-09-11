import productImage from "../../assets/products/pv183224.webp";
import productImage2 from "../../assets/products/ph1116KL3eu.jpg";

// Общие наборы характеристик (чтобы не дублировать текст в каждом товаре)
const featuresHybrid3kW = [
    "Для котла отопления, Для ИБП",
    "Номинальная мощность — 3 кВт, 3000 Вт",
    "Контроллер заряда — MPPT (МППТ)",
    "Мощность солнечных батарей — 3000 Вт",
    "Максимальное входное напряжение от СБ — 500 В",
    "Напряжение аккумуляторов — 24 В",
    "Подмешивание в сеть — Есть",
    "Работа без АКБ — Да",
    "Экспорт в сеть — Нет",
];

export const products = {
    invertors: [
        {
            id: "a3f9c2d7",
            title: "Инвертор гибридный MUST 3 кВт PV18-3224-VPM I (1 фаза)",
            subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
            image: productImage,
            inStock: false,
            features: featuresHybrid3kW,
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
            features: featuresHybrid3kW, // повторно используем тот же массив
            price: "от 145 000 ₽",
            badge: "Хит продаж",
        },
        {
            id: "x5Dx1ve7V",
            title: "Трехфазный гибридный солнечный инвертор MUST PH11-16KL3-EU 16кВт",
            subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
            image: productImage2,
            inStock: false,
            features: featuresHybrid3kW,
            price: "от 145 000 ₽",
            badge: "Хит продаж",
        },
    ],
    charging: [],
};
