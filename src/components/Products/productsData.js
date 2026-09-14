import productImage from "../../assets/products/pv183224.webp";
import productImage2 from "../../assets/products/ph1116KL3eu.jpg";

// Общие наборы характеристик (чтобы не дублировать текст в каждом товаре)
const specsData = {
  purpose: {
    label: "Назначение",
    value: "Для дома, для резервного питания, для котла отопления, для ИБП",
  },
  type: { label: "Тип", value: "Гибридный инвертор" },
  power: { label: "Мощность", value: "6 кВт, 6000 Вт" },
  controller: { label: "Контроллер", value: "MPPT (МППТ)" },
  solarPanelPower: { label: "Мощность солнечных панелей", value: "6000 Вт" },
  batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
  other: {
    label: "Дополнительные характеристики",
    value:
      "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
  },
};

export const products = {
  invertors: [
    {
      id: "a3f9c2d7",
      title: "Инвертор гибридный MUST 3 кВт PV18-3224-VPM I (1 фаза)",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: productImage,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Гибридный инвертор" },
        power: { label: "Мощность", value: "6 кВт, 6000 Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "6000 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      },
      price: "145 000 ₽",
      badge: "Хит продаж",
    },
    {
      id: "8b4e1k9m",
      title: "Инвертор гибридный MUST 6 кВт PV18-6048 PRO (1 фаза)",
      subtitle: "Готовое решение под ключ: панели, инвертор, АКБ, монтаж",
      image: productImage,
      inStock: true,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Гибридный инвертор" },
        power: { label: "Мощность", value: "6 кВт, 6000 Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "6000 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      },
      price: "290 000 ₽",
      badge: "Лучшее решение",
    },
    {
      id: "z5p7q3w2",
      title: "Инвертор гибридный MUST 6 кВт PV18-6048 PRO (1 фаза)",
      subtitle: "Гибрид: резервное питание + солнечная генерация",
      image: productImage,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Гибридный инвертор" },
        power: { label: "Мощность", value: "6 кВт, 6000 Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "6000 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      },
      price: "280 000",
      badge: "Новинка",
    },
    {
      id: "n9x1v8t4",
      title: "Гибридный инвертор MUST 10 кВт MUST PV19-10048 EXP",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: productImage,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Гибридный инвертор" },
        power: { label: "Мощность", value: "6 кВт, 6000 Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "6000 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      }, // повторно используем тот же массив
      price: "300 000 ₽",
      badge: "Хит продаж",
    },
    {
      id: "x5Dx1ve7V",
      title: "Трехфазный гибридный солнечный инвертор MUST PH11-16KL3-EU 16кВт",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: productImage2,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Гибридный инвертор" },
        power: { label: "Мощность", value: "6 кВт, 6000 Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "6000 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      },
      price: "200 000 ₽",
      badge: "Хит продаж",
    },
  ],
  charging: [],
};
