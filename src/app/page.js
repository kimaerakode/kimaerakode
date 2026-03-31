import Image from "next/image";
import styles from "./page.module.css";
import Portfolio from "./components/portfolio/Portfolio";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className="section">
          <div className={styles.intro}>
            <p>
              <span>
                Kimaerakode is the alias of developer and web designer Rosalina
                Frey. With an academic background in frontend development and
                over a decade of experience in digital art, she creates visually
                compelling web solutions for brands, projects, and portfolios.
              </span>
              <span>
                Rosalina’s vision centers on blending frontend logic with
                aesthetic design to deliver intuitive and memorable user
                experiences.
              </span>
              <span>
                Based in
                <span className="romantic">&nbsp;Copenhagen,</span> Denmark.
              </span>
            </p>
          </div>

          <ul className={styles.services}>
            <li>Frontend Development</li>
            <li>Digital & Web Design</li>
            <li>UI/UX Design</li>
          </ul>
          <div>
            <Image
              className={styles.swirl}
              src="/assets/svg/swirl.svg"
              alt="Swirly type art"
              width={178}
              height={168}
            />
          </div>
        </section>

        {/* <Portfolio /> */}
      </main>
    </div>
  );
}
