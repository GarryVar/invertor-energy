function Features({ featuresRef, product, isFeaturesVisible, styles }) {
  const rows = Object.values(product.features || {});

  return (
    <div
      className={`${styles.orderProducSpecif} ${isFeaturesVisible ? "features-visible" : "features-hidden"}`}
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
            <th>Характеристика</th>
            <th>Значение</th>
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
              <td title={item.titleSmall || ''}
                style={{ textAlign: 'left' }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Features;
