import Data from "../../_statics/user-data.json";
import styles from "./page.module.css";

export default function Main() {
  let contactInfo = Data.contact;

  const getLinkHref = (type: string, value: string) => {
    if (type === "email") {
      return `mailto:${value}`;
    }
    return value;
  };

  return (
    <div id="contact" className={styles.root}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact
        </h1>
        <ul className={styles.list}>
          {contactInfo.map((contact) => (
            <li key={contact.type} className={styles.card}>
              <a
                href={getLinkHref(contact.type, contact.value)}
                target={contact.type === "email" ? undefined : "_blank"}
                rel={contact.type === "email" ? undefined : "noreferrer"}
                className={styles.cardLink}
              >
                <img
                  src={contact.logo}
                  alt={contact.type}
                  className={styles.cardLogo}
                />
                <div className={styles.cardContent}>
                  <div className={styles.cardType}>
                    {contact.type}
                  </div>
                  <div className={styles.cardValue}>
                    {contact.type === "email" ? contact.value : contact.value.replace(/(https?:\/\/)|(www\.)/, "")}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}