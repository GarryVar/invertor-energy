// Invertors images
import deye66k from "../../assets/products/deye_6-6K.webp";
import deye1420k from "../../assets/products/deye_1420k.webp";
import deye25kw from "../../assets/products/deye25kw.webp";

// Charging
import dynessPowerBricSC from "../../assets/products/chargings/dyness_powerbrickSC.webp";
import deyeSpringSEG from "../../assets/products/chargings/deye_spring_seg1.webp";

// Solar Panels
import lp1624Second from "../../assets/products/chargings/lp1624100--2.jpg";
import jkm650670n from "../../assets/products/panels/jkm650-670n-66ql6.jpg";

// Brand Logos
import LogoJinko from "../SvgIcons/LogoBrandJinko";
import LogoDeye from "../SvgIcons/LogoBrandDeye";
import LogoDyness from "../SvgIcons/LogoBrandDyness";

export const products = {
  invertors: [
    {
      id: "DEYE_SUN-6.6K-OG03L",
      tool: "Гибридный инвертор",
      title: "DEYE SUN-6.6K",
      model: "DEYE SUN-6.6K-OG03LP",
      subtitle: "Гибридный солнечный инвертор однофазный",
      image: deye66k,
      inStock: false,
      price: "108 864 ₽",
      badge: "Хит продаж",
      purpose: {
        label: "Назначение",
        value: "Для дома, для резервного питания, для котла отопления, для ИБП",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "Deye",
          logo: <LogoDeye />,
          link: "https://www.deye-rus.ru/",
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
      tool: "Гибридный инвертор",
      title: "DEYE SUN-15K",
      model: "DEYE SUN-15K-SG05LP3-EU-SM2",
      subtitle: "Готовое решение под ключ: панели, инвертор, АКБ, монтаж",
      image: deye1420k,
      inStock: true,
      purpose: {
        label: "Назначение",
        value: "Для дома, для резервного питания, для котла отопления, для ИБП",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoDeye />,
          link: "https://www.deye-rus.ru/",
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
      id: "DEYE_SUN-25K-SG01HP3-EU-AM2",
      title: "DEYE SUN-25K",
      tool: "Гибридный инвертор",
      model: "DEYE SUN-25K-SG01HP3-EU-AM2",
      subtitle: "Высоковольтный гибридный трехфазный солнечный инвертор",
      image: deye25kw,
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Для дома, для резервного питания, для котла отопления, для ИБП",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "Deye",
          logo: <LogoDeye />,
          link: "https://www.deye-rus.ru/",
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
      id: "dyness_powerbrickSC",
      tool: "Аккумуляторная батарея",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Dyness PowerBrick SCD",
      image: dynessPowerBricSC,
      inStock: true,
      price: "220 000 ₽",
      badge: "Хит продаж",
      subtitle:
        "Низковольтная литий-железо-фосфатная (LiFePO₄) аккумуляторная батарея, разработанная для домашнего и небольшого коммерческого хранения энергии, в том числе в составе солнечных систем. ",
      purpose: {
        label: "Назначение",
        value:
          "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "Dyness",
          logo: <LogoDyness />,
          link: "https://www.deye-rus.ru/",
        },
        type: {
          label: "Тип батареи",
          value: "LiFePO4(LFP)",
        },
        power: { label: "Номинальное напряжение", value: " 51,2 В" },
        energy: { label: "Номинальная энергия", value: "16,076 кВт·ч." },
        capacity: { label: "Номинальная мощность", value: "314 А·ч" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value: "≥8000 циклов",
        },
        ServicePeriod: { label: "Срок службы", value: "10 лет" },
        size: {
          label: "Размер",
          value: "435*233*857 мм.",
        },
        weight: { label: "Вес", value: "116кг" },
      },
    },

    {
      id: "dyness_powerbrickSC",
      tool: "Аккумуляторная батарея",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Dyness PowerBrick SC",
      image: dynessPowerBricSC,
      inStock: true,
      price: "220 000 ₽",
      badge: "Хит продаж",
      subtitle:
        "Низковольтная литий-железо-фосфатная (LiFePO₄) аккумуляторная батарея, разработанная для домашнего и небольшого коммерческого хранения энергии, в том числе в составе солнечных систем. ",
      purpose: {
        label: "Назначение",
        value:
          "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "Dyness",
          logo: <LogoDyness />,
          link: "https://www.deye-rus.ru/",
        },
        type: {
          label: "Тип батареи",
          value: "LiFePO4(LFP)",
        },
        power: { label: "Номинальное напряжение", value: " 51,2 В" },
        energy: { label: "Номинальная энергия", value: "16,076 кВт·ч." },
        capacity: { label: "Номинальная мощность", value: "314 А·ч" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value: "≥8000 циклов",
        },
        ServicePeriod: { label: "Срок службы", value: "10 лет" },
        size: {
          label: "Размер",
          value: "435*233*857 мм.",
        },
        weight: { label: "Вес", value: "116кг" },
      },
    },

    {
      id: "DEYE_SPRING_SEG1PROB",
      tool: "Аккумуляторная батарея",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Deye SE-G5.1 Pro-B",
      inStock: false,
      image: deyeSpringSEG,
      price: "220 000 ₽",
      badge: "Хит продаж",
      subtitle:
        "Низковольтный литий-железо-фосфатный (LiFePO₄) аккумуляторный модуль ёмкостью 5,12 кВт·ч. Он предназначен для работы с гибридными инверторами Deye и системами накопления энергии.",
      purpose: {
        label: "Назначение",
        value:
          "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
      },

      features: {
        brand: {
          label: "Бренд",
          value: "Deye",
          logo: <LogoDeye />,
          link: "https://www.deye-rus.ru/",
        },
        type: {
          label: "Тип батареи",
          value: "LiFePO4(LFP)",
        },
        power: { label: "Номинальное напряжение", value: " 51,2 В" },
        energy: { label: "Номинальная энергия", value: "16,076 кВт·ч." },
        capacity: { label: "Номинальная мощность", value: "314 А·ч" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value: "≥8000 циклов",
        },
        ServicePeriod: { label: "Срок службы", value: "10 лет" },
        size: {
          label: "Размер",
          value: "435*233*857 мм.",
        },
        weight: { label: "Вес", value: "116кг" },
      },
    },
  ],
  panels: [
    {
      id: "JKN650-670N-66QL6-BVD",
      tool: "Солнечная панель",
      title: "Jinko 650-670N",
      model: "66QL6-BVD",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, Bifacial",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество",
        },
        power: { label: "Мощность", value: "650-670Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "35 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1134x30 мм.",
        },
        weight: { label: "Вес", value: "32.5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
      price: "Уточняйте на складе",
      badge: "Хит продаж",
    },

    {
      id: "JKN48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 460",
      model: "48QL60DB",
      subtitle:
        "Солнечная панель технологии Tiger Neo III. Ведущий класс мощности на базе усовершенствованной платформы N‑type TOPCon благодаря передовым технологиям и оптимизированной компоновке, которая улавливает больше солнечного света",
      image: jkm650670n,
      price: "Уточняйте на складе",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "36.63 В",
        },
        power: { label: "Мощность", value: "460Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
    },

    {
      id: "JKN48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 465",
      model: "48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "Уточняйте на складе",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "30.80 В",
        },
        power: { label: "Мощность", value: "465Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
    },
    {
      id: "JKN48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 470",
      model: "48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "Уточняйте на складе",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "30.97 В",
        },
        power: { label: "Мощность", value: "470Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
    },
    {
      id: "JKN48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 475",
      model: "48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "Уточняйте на складе",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "31.13 В",
        },
        power: { label: "Мощность", value: "475Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
    },
    {
      id: "JKN48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 480",
      model: "48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "Уточняйте на складе",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "31.32 В",
        },
        power: { label: "Мощность", value: "480Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
    },
    {
      id: "JKN48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 485",
      model: "48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "Уточняйте на складе",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "31.50 В",
        },
        power: { label: "Мощность", value: "480Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },
      },
    },
  ],
};
