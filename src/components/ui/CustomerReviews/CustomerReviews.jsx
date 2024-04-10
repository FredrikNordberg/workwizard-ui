import styles from './CustomerReviews.module.css';

const CustomerReviews = () => {
  return (
    <div id={styles['customer-reviews']}>
      <h2>Vad tycker våra kunder?</h2>
      <section>
        <h2>10/10</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          illum. In consequatur accusantium necessitatibus vero provident
          laudantium sit sint voluptatem?
        </p>
      </section>
      <section>
        <h2>92%</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          illum. In consequatur accusantium necessitatibus vero provident
          laudantium sit sint voluptatem?
        </p>
      </section>
      <section>
        <h2>96%</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          illum. In consequatur accusantium necessitatibus vero provident
          laudantium sit sint voluptatem?
        </p>
      </section>
    </div>
  );
};

export default CustomerReviews;
