// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { advantages } from "./advantages-items";

import styles from "./Advantages.module.css";

function Advantages() {
  return (
    <section className={`${styles.advantages} py-12`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Ваш комфорт под ключ: от звонка до монтажа
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 Извините lg:grid-cols-3  gap-6">
          {advantages.map((i) => (
            <div
              className={`${styles.advantageItem} p-6 rounded  bg-gray-50 h-full`}
            >
              {i.icon}

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {i.title}
              </h3>
              <p className="text-gray-700 text-1xl">{i.desc}</p>
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
  );
}

export default Advantages;
