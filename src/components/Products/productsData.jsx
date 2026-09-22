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
      title: "Гибридный солнечный инвертор",
      model: "DEYE SUN-6.6K-OG03LP",
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
      title: "Гибридный солнечный инвертор",
      model: "DEYE SUN-15K-SG05LP3-EU-SM2",
      subtitle: "Готовое решение под ключ: панели, инвертор, АКБ, монтаж",
      image: deye1420k,
      inStock: true,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
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
      title: "Гибридный инвертор высоковольтный",
      model: "DEYE SUN-25K-SG01HP3-EU-AM2",
      subtitle: "Высоковольтный гибридный трехфазный солнечный инвертор",
      image: deye25kw,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
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
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Dyness PowerBrick SC",
      subtitle:
        "Низковольтная литий-железо-фосфатная (LiFePO₄) аккумуляторная батарея, разработанная для домашнего и небольшого коммерческого хранения энергии, в том числе в составе солнечных систем. ",
      image: dynessPowerBricSC,
      inStock: true,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
        },
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
      price: "220 000 ₽",
      badge: "Хит продаж",
    },

    {
      id: "DEYE_SPRING_SEG1PROB",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Deye SE-G5.1 Pro-B",
      subtitle:
        "Низковольтный литий-железо-фосфатный (LiFePO₄) аккумуляторный модуль ёмкостью 5,12 кВт·ч. Он предназначен для работы с гибридными инверторами Deye и системами накопления энергии.",
      image: deyeSpringSEG,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value:
            "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
        },
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
      price: "220 000 ₽",
      badge: "Хит продаж",
    },
  ],
  panels: [
    {
      id: "JKN650-670N-66QL6-BVD",
      title: "Jinko 650-670N",
      model: "66QL6-BVD",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      inStock: false,
      features: {
        purpose: {
          label: "Назначение",
          value: "Преобразование солнечной энергии в электричество",
        },
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
  ],
};
