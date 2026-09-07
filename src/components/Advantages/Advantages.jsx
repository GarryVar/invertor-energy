import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import IconClock from '../SvgIcons/IconClock';
import IconInstallation from '../SvgIcons/IconInstall';
import IconWishlist from "../SvgIcons/IconList";
import IconDelivery from '../SvgIcons/IconDelivery';
import IconService from '../SvgIcons/IconService';

import styles from './Advantages.module.css';

function Advantages() {
  const advantages = [
    {   id: '8d4e1k9m',
      title:'Быстрый расчёт за 15 минут',
      text: "Наш инженер бесплатно рассчитывает нужную емкость батарей и мощность инвертора.", 
      icon: <IconClock/>,
    },
    {   id: 'z5n6p8q3',
      title:'Подбор под ваш бюджет и задачи',
      text: 'Не навязываем лишнее: подбираем систему строго под ваши потребности — площадь дома, количество техники и типичные сценарии отключения электричества.' ,
      icon: <IconWishlist/>,
    },
    {   id: 'r7t2v4w9',
      title:'Проффесиональный монтаж',
      text: " Монтаж пусконаладка под ключ. Сертифицированный электрик устанавливает систему в щиток, подключает фазы и настраивает автозапуск генератора (если есть)", 
      icon: <IconInstallation/>
    },
    {   id: 'x1y8j5k6',
      title:'Доставка',
      text: "Доставка в Крым прямо отзавода производителя. Аккуратно упаковываем оборудование. ", 
      icon: <IconDelivery/>
    },
    {   id: 'p4q8r1s5',
      title:'Гарантия и сервисное обслуживание',
      text: 'Официальная гарантия на оборудование и регулярное сервисное обслуживание. Решим любые вопросы по работе системы.', 
      icon: <IconService/>
    },
  ];

    return (
      <section className={`${styles.advantages} py-12`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Ваш комфорт под ключ: от звонка до монтажа
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 Извините lg:grid-cols-3  gap-6">

            {advantages.map((i) => (
              <div className={`${styles.advantageItem} p-6 border border-gray-200 rounded  bg-gray-50 h-full`}>
               {i.icon}
               <h3 className="text-xl font-semibold text-gray-900 mb-3">{i.title}</h3>
                <p className="text-gray-700 text-1xl">{i.text}</p>
              </div>
            ))}
          </div>
           {/* <Swiper
          modules={[Navigation, Pagination]}
          navigation

          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
  
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="advantages-slider"
        >
          {advantages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`${styles.advantageItem} p-6 border border-gray-200 rounded  bg-gray-50 h-full`}>
               {item.icon}
                <p className="text-gray-700 text-1xl">{item.title}</p>
              </div>
            </SwiperSlide>
          ))} 
        </Swiper> */}
        </div>
      </section>
    )
}

export default Advantages;