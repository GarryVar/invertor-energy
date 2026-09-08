
import IconClock from '../SvgIcons/IconClock';
import IconInstallation from '../SvgIcons/IconInstall';
import IconWishlist from "../SvgIcons/IconList";
import IconDelivery from '../SvgIcons/IconDelivery';
import IconService from '../SvgIcons/IconService';

export const advantages = [
{   id: '8d4e1k9m',
    title:'Быстрый расчёт за 15 минут',
    desc: "Наш инженер бесплатно рассчитывает нужную емкость батарей и мощность инвертора.", 
    icon: <IconClock/>,
  },
  {   id: 'z5n6p8q3',
    title:'Подбор под ваш бюджет и задачи',
    desc: 'Не навязываем лишнее: подбираем систему строго под ваши потребности — площадь дома, количество техники и типичные сценарии отключения электричества.' ,
    icon: <IconWishlist/>,
  },
  {   id: 'r7t2v4w9',
    title:'Проффесиональный монтаж',
    desc: " Монтаж пусконаладка под ключ. Сертифицированный электрик устанавливает систему в щиток, подключает фазы и настраивает автозапуск генератора (если есть)", 
    icon: <IconInstallation/>
  },
  {   id: 'x1y8j5k6',
    title:'Доставка',
    desc: "Доставка в Крым прямо отзавода производителя. Аккуратно упаковываем оборудование. ", 
    icon: <IconDelivery/>
  },
  {   id: 'p4q8r1s5',
    title:'Гарантия и сервисное обслуживание',
    desc: 'Официальная гарантия на оборудование и регулярное сервисное обслуживание. Решим любые вопросы по работе системы.', 
    icon: <IconService/>
  },
];