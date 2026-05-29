import Data from "../../_statics/user-data.json";
import styles from "./page.module.css";

export default function Main() {
  let experience = Data["work-experience"];

  return (
    <div id="experience" className={styles.root}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Experience
        </h1>
        <ul className={styles.list}>
          {experience.map((exp) => (
            <li key={exp.company} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h2 className={styles.cardTitle}>{exp.position}</h2>
                  <p className={styles.cardCompany}>{exp.company}</p>
                </div>
                <p className={styles.cardDuration}>{exp.duration}</p>
              </div>
              {exp.responsibilities?.length > 0 && (
                <div className={styles.cardSection}>
                  <p className={styles.cardSectionTitle}>Key Accomplishments</p>
                  <ul className={styles.cardList}>
                    {exp.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}