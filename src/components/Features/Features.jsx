import styles from "./Features.module.css";
import IconFeatures from "../../assets/icon/icon_features.svg?react";
import IconProps from "../../assets/icon/icon_props.svg?react";

function Features({ featuresRef, product, isFeaturesVisible }) {
  const rows = Object.values(product.features || {});

  return (
    <div
      className={`${styles.featuresProductSpecif} ${isFeaturesVisible ? "features-visible" : "features-hidden"}`}
      ref={featuresRef}
      style={{
        maxHeight: isFeaturesVisible ? "1000px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-out, opacity 0.3s",
      }}
    >
      <table className={styles.featuresTable}>
        <thead>
          <tr>
            <th>
              <div className={styles.featuresTableThWrapper}>
                <IconFeatures />
                <span>Характеристика</span>
              </div>
            </th>

            <th>
              <div className={styles.featuresTableThWrapper}>
                <IconProps />
                <span>Значение</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.label}>
              <td
                style={{ textAlign: "left", fontWeight: "bold" }}
                data-label={item.label}
              >
                {item.label}
              </td>
              <td
                data-value={item.id}
                title={item.titleSmall || ""}
                style={{ textAlign: "left" }}
              >
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Features;
