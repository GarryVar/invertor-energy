import { advantages } from "./advantages-items";
import styles from "./Advantages.module.css";

const cardClasses = `${styles.advantageItem} p-6 rounded bg-gray-50 h-full`;

function Advantages() {
  return (
    <section className={`${styles.advantages} py-12`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Ваш комфорт под ключ: от звонка до монтажа
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div key={item.id} className={cardClasses}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
