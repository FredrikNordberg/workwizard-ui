import styles from "./Home.module.css"
import PageHeader from "../ui/PageHeader";


const Home = () => {
  return (
    <article id={styles.mainContent}>
      <section className={`${styles.container}`}>
        <div className={styles.mainContentInfo}>
        <PageHeader headerText="Välkommen" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi esse molestias quisquam aspernatur aperiam,
            doloribus laborum alias vitae id? Quos optio neque facere vero aut ullam modi quis, possimus itaque,
            laborum consequatur commodi suscipit et impedit nobis alias, pariatur voluptates?
          </p>
        </div>
      </section>
    </article>
  );
};

export default Home;
