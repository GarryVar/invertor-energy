import productImage from "../../assets/products/pv183224.webp";
import productImage2 from "../../assets/products/ph1116KL3eu.webp";
import pv180048 from "../../assets/products/pv180048_pro.webp";
import deye66k from "../../assets/products/deye_6-6K.webp";
import deye1420k from "../../assets/products/deye_1420k.webp";
import deye25kw from "../../assets/products/deye25kw.webp";

import lp1624 from "../../assets/products/chargings/lp1624100.webp";
import lp1624Second from "../../assets/products/chargings/lp1624100--2.jpg";
import jkm650670n from "../../assets/products/panels/jkm650-670n-66ql6.jpg";

export const products = {
  invertors: [
    {
      id: "DEYE_SUN-6.6K-OG03L",
      title: "Гибридный солнечный инвертор DEYE SUN-6.6K-OG03LP",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: deye66k,
      inStock: false,
      price: "108 864 ₽",
      badge: "Хит продаж",
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Бестрансформаторный" },
        power: { label: "Мощность", value: "6 кВт / 6000 Вт" },
        controller: { label: "Контроллер", value: "MPPT ( 2 штуки )" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "13 200 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      },
    },
    {
      id: "DEYE_SUN-15K-SG05LP3-EU-SM2",
      title: "Гибридный солнечный инвертор DEYE SUN-15K-SG05LP3-EU-SM2",
      subtitle: "Готовое решение под ключ: панели, инвертор, АКБ, монтаж",
      image: deye1420k,
      inStock: true,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Бестрансформаторный" },
        power: { label: "Мощность", value: "15кВт / 15000Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "30 000 Вт",
        },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет",
        },
      },
      price: "398 664 ₽",
      badge: "Лучшее решение",
    },
    {
      id: "PV18-10048_PRO_II",
      title: "Инвертор гибридный MUST 6 кВт PV18-10048 PRO II (1 фаза)",
      subtitle:
        "Cолнечные электростанции, сточники бесперебойного питания, источники резервного электропитания",
      image: pv180048,
      inStock: false,
      price: "91 000 ₽",
      badge: "Новинка",
      features: {
        purpose: { label: "Назначение", value: "Используется в солнечных электростанциях и системах бесперебойного питания." },
        type: { label: "Тип", value: "Бестрансформаторный" },
        power: { label: "Мощность", value: "10000ВА / 10000Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: { label: "Мощность солнечных панелей", value: "10000 Вт (5000 x 2)" },
        batteryVoltage: { label: "Напряжение аккумулятора", value: "48 В" },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — нет"
        },
      },

    },

    {
      id: "PV19-10048_EXP",
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
        power: { label: "Мощность", value: "6 кВт / 6000 Вт" },
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
      price: "300 000 ₽",
      badge: "Хит продаж",
    },
    {
      id: "MUST_PH11-16KL3-EU",
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
        power: { label: "Мощность", value: "6 кВт / 6000 Вт" },
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

    {
      id: "DEYE_SUN-25K-SG01HP3-EU-AM2",
      title: "Гибридный инвертор высоковольтный DEYE SUN-25K-SG01HP3-EU-AM2",
      subtitle: "Высоковольтный гибридный трехфазный солнечный инвертор",
      image: deye25kw,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        type: { label: "Тип", value: "Гибридный инвертор" },
        power: { label: "Мощность", value: "25кВт / 25000Вт" },
        controller: { label: "Контроллер", value: "MPPT (МППТ)" },
        solarPanelPower: {
          label: "Мощность солнечных панелей",
          value: "50 000 Вт",
        },
        batteryVoltage: {
          label: "Напряжение аккумулятора",
          value: "Литий-Ионный 160 - 700 В",
        },
        other: {
          label: "Дополнительные характеристики",
          value:
            "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
        },
      },
      price: "415 040 ₽",
      badge: "Хит продаж",
    },
  ],

  chargings: [
    {
      id: "LifePO4_LP16-24100_2560Wh",
      title:
        "Аккумуляторная батарея MUST LP16-24100 2560Wh",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: lp1624,
      carusel: [lp1624, lp1624Second],
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "MUST LP16-24100 — настенная литий-железо-фосфатная аккумуляторная батарея серии PowerWall, предназначенная для современных систем хранения энергии. Модель обеспечивает стабильную работу совместно с гибридными инверторами, солнечными электростанциями и системами резервного электроснабжения.",
        },
        power: { label: "Номинальное напряжение", value: "25,6V/51V/10,24V" },
        capacity: { label: "Номинальная емкость", value: "100Аh/200Аh" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value:
            "≥6000 циклов при 80% DОD, 35,°С 0.5C ≥2500 циклов при 100% DОD, 35°С, 0.5C",
        },
        ServicePeriod: { label: "Срок службы", value: "15 лет" },
        size: {
          label: "Размер",
          value: "442*485.5*177 / 442*625.5*177 / 442*686.5*25",
        },
        weight: { label: "Вес", value: "27 / 45 /81 кг" },
      },
      price: "85 000 ₽",
      badge: "Хит продаж",
    },

    {
      id: "LifePO4_LP16-48100_5120Wh",
      title:
        "Аккумулятор MUST литий-железо-фосфатный LifePO4 LP16-48100 5120Wh",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: lp1624,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Накопления и резервирования электроэнергии в автономных и гибридных системах электроснабжения",
        },
        power: { label: "Номинальное напряжение", value: "25,6V/51V/10,24V" },
        capacity: { label: "Номинальная емкость", value: "100Аh/200Аh" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value:
            "≥6000 циклов при 80% DОD, 35,°С 0.5C ≥2500 циклов при 100% DОD, 35°С, 0.5C",
        },
        ServicePeriod: { label: "Срок службы", value: "15 лет" },
        size: {
          label: "Размер",
          value: "442*485.5*177 / 442*625.5*177 / 442*686.5*25",
        },
        weight: { label: "Вес", value: "27 / 45 /81 кг" },
      },
      price: "85 000 ₽",
      badge: "Хит продаж",
    },

    {
      id: "ux8T97gsQ",
      title:
        "Аккумулятор MUST литий-железо-фосфатный LifePO4 LP16-48200 10240Wh",
      subtitle: "Умное распределение энергии: сеть + солнечные панели + АКБ",
      image: lp1624,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Накопления и резервирования электроэнергии в автономных и гибридных системах электроснабжения",
        },
        power: { label: "Номинальное напряжение", value: "25,6V/51V/10,24V" },
        capacity: { label: "Номинальная емкость", value: "100Аh/200Аh" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value:
            "≥6000 циклов при 80% DОD, 35,°С 0.5C ≥2500 циклов при 100% DОD, 35°С, 0.5C",
        },
        ServicePeriod: { label: "Срок службы", value: "15 лет" },
        size: {
          label: "Размер",
          value: "442*485.5*177 / 442*625.5*177 / 442*686.5*25",
        },
        weight: { label: "Вес", value: "27 / 45 /81 кг" },
      },
      price: "85 000 ₽",
      badge: "Хит продаж",
    },
  ],
  panels: [
    {
      id: "JKN650-670N-66QL6-BVD",
      title:
        "Jinko 650-670N",
      model: "66QL6-BVD",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Преобразование солнечной энергии в электричество",
        },
        brand: { label: "Бренд", value: "JINKO" },
        technology: { label: 'Технология', value: 'TOPCon, Bifacial' },
        power: { label: "Мощность", value: "650-670Вт" },
        maxFuseCurrentA: {
          label: 'Max ток предохранителя', value: '35 A'
        },
        size: {
          label: "Габариты", value: "2382x1134x30 мм.",
        },
        weight: { label: "Вес", value: "32.5 кг" },
        operatingTemperatureRangeC: {
          label: 'Рабочая температура',
          value: '−40…+70 °C'
        },
      },
      price: "Уточняйте на складе",
      badge: "Хит продаж",
    },
  ],
};
