/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {

  return (
    <main id={styles.mainContainer}>

      {/* <header id={styles.headerContainer}>
        <h1 id={styles.headerTitle}>
          Portfolie opgave
        </h1>
      </header> */}


      <section id={styles.aboutContainer}>
        <div id={styles.aboutLeft}>
          <p id={styles.aboutTitle}>
            Halløj, mit navn er Andreas.
            <img id={styles.aboutImg} src="/images/wave_emoji.webp" />
          </p>
          <p id={styles.aboutInfo}>
            Skarp i bagenden Full-stack udvikler, <br />der pt. studere på VidenDjurs i Grenaa.

          </p>
          <div id={styles.langContainer}>

            <img id={styles.aboutLang} src="/images/lang/csharp-icon.png" />

            <img id={styles.aboutLang} src="/images/lang/javascript-icon.png" />

            <img id={styles.aboutLang} src="/images/lang/react.png" />

            <img id={styles.aboutLang} src="/images/lang/typescript-icon.png" style={{ paddingLeft: ".45rem" }} />

            <img id={styles.aboutLang} src="/images/lang/mongodb.png" />

            <img id={styles.aboutLang} src="/images/lang/nodejs-icon.png" />

            <img id={styles.aboutLang} src="/images/lang/scss-icon.png" />
          </div>
        </div>
        <div id={styles.aboutRight}>
          <img id={styles.aboutBitmoji} src="/images/bitmoji.png" />

        </div>


      </section>

      <section id={styles.githubProjects}>

        <h2 id={styles.githubTitle}>
          <img style={{ width: "35px", height: "35px", marginRight: ".5rem" }} src="/images/lang/github-icon.png" />
          Featured Github Project
        </h2>
          <a id={styles.profileLink} href="https://github.com/Andreas-DEV" target="_blank">my profile</a>

        <div id={styles.test}>

        <div id={styles.projectContainer}>


          <section id={styles.titleContainer}>
            <div>
            <a id={styles.projectLink} href="https://github.com/Andreas-DEV/GjerrildAPI" target="_blank">
              GjerrildAPI
            </a>

            </div>
            <span id={styles.projectVis}>Public</span>


          </section>

          <div id={styles.projectLang}>
            <span id={styles.langCol} />
            <p id={styles.langText}>
              JavaScript    <span id={styles.projectUpdate}>Updated 3 weeks ago</span>
            </p>
          </div>



     
        </div>
          <div id={styles.favContainer}>
            <div id={styles.favLeft}>
              <img id={styles.favStar} style={{ width: "20px", height: "20px", margin: ".5rem" }} src="/images/star.svg" />
              <span style={{ fontSize: ".8rem", padding: ".3rem", marginRight: ".5rem" }}>
                Star
              </span>
            </div>

            <img id={styles.favArrow} src="/images/arrow-down.svg" style={{ width: "10px", margin: ".5rem" }} />

          </div>
        </div>

      </section>


    </main>
  );
}
