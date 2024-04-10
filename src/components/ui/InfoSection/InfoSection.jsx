import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <article id={styles.info} className={styles.container}>
      <section className={`${styles.box} ${styles.bgDark}`}>
        <h3>Hantverkare</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          deserunt sit quos, ratione numquam distinctio maiores nisi veniam
          dolore quis.
        </p>
      </section>
      <section className={`${styles.box} ${styles.bgDark}`}>
        <h3>Arbetsorder</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          deserunt sit quos, ratione numquam distinctio maiores nisi veniam
          dolore quis.
        </p>
      </section>
      <section className={`${styles.box} ${styles.bgDark}`}>
        <h3>Kunder</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          deserunt sit quos, ratione numquam distinctio maiores nisi veniam
          dolore quis.
        </p>
      </section>
    </article>
  );
};

export default InfoSection;
