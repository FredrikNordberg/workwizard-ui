import styles from './About.module.css';
import skopaImage from '../../assets/images/skopa.jpg';
import PageHeader from '../ui/PageHeader';

const About = () => {
  return (
    <article className={styles.about}>
      <div className={styles.container}>
        <section className={styles['about-left']}>
         <PageHeader headerText="Vilka är vi?" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            eligendi temporibus officiis nobis tempore deserunt modi ex ullam
            explicabo obcaecati, vero aperiam quo libero doloremque saepe
            veritatis a molestiae provident minus laborum aut recusandae fuga
            quia? Sint quod iusto ullam?
          </p>
        </section>
        <section className={styles['about-right']}>
          <img src={skopaImage} alt="skopa" />
        </section>
      </div>
    </article>
  );
};

export default About;