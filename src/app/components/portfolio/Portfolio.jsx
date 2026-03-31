import styles from "./portfolio.module.css";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <div className={styles.heading}>
        <p>
          I'm currently working on new projects to fill my portfolio.&nbsp;
          <span className="romantic">&nbsp;Stay tuned .</span>
        </p>
      </div>

      <section className={`${styles.portfolio} section`}>
        <a
          className={styles.link}
          href="">
          <div className={styles.header}>
            <span className={`${styles.title} title`}>Project 1</span>
            <span>Portfolio for Video Artist</span>
          </div>
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src="/assets/img/freyasinius.png"
              alt="Freya Sinius website"
              width={1280}
              height={832}
            />
          </div>
        </a>
        <a
          className={styles.link}
          href="">
          <div className={styles.header}>
            <span className={`${styles.title} title`}>Project 2</span>
            <span>Portfolio for Music Artist</span>
          </div>
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src="/assets/img/freyasinius.png"
              alt="Freya Sinius website"
              width={1280}
              height={832}
            />
          </div>
        </a>
      </section>
    </>
  );
};

export default Portfolio;
