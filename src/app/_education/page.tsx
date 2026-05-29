import Data from "../../_statics/user-data.json";
import styles from "./page.module.css";

export default function Main() {
  let education = Data["education"];

  return (
    <div id="education" className={styles.root}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Education
        </h1>
        <ul className={styles.list}>
          {education.map((edu) => (
            <li
              key={edu.institution}
              className={styles.card}
            >
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className={styles.cardLogo}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardDegree}>
                  {edu.degree}
                </h3>
                <p className={styles.cardInstitution}>
                  {edu.institution}
                </p>
                <p className={styles.cardDuration}>
                  {edu.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}