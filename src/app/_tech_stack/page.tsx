"use client";

import { useMemo, useState } from "react";
import Data from "../../_statics/user-data.json";
import styles from "./page.module.css";

export default function Main() {
  let techStack = Data["tech-stack"];
  let [filter, setFilter] = useState("all");
  let filters = ["all", "frontend", "backend", "scripting", "database", "tools"];

  let filteredTech = useMemo(
    () =>
      techStack.filter((tech) =>
        filter === "all" || tech.tags.includes(filter.toLowerCase())
      ),
    [filter, techStack]
  );

  let onFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  }

  return (
    <div id="tech-stack" className={styles.root}>
      <main className={styles.main}>
        <div className={styles.fullWidth}>
          <h1 className={styles.title}>Tech Stack</h1>
          <div className={styles.filterBar}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => onFilterClick(f)}
                className={`${styles.filterButton} ${filter === f ? styles.filterButtonActive : ""}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ul className={styles.grid}>
          {filteredTech.length > 0 ? (
            filteredTech.map((tech) => (
              <li key={tech.name}>
                <a href={tech.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
                  <div className={styles.logoWrapper}>
                    <img src={tech.logo} alt={`${tech.name} logo`} className={styles.cardLogo} />
                  </div>
                  <span className={styles.cardLabel}>{tech.name}</span>
                </a>
              </li>
            ))
          ) : (
            <li className={styles.emptyState}>
              No tech items match your filter.
            </li>
          )}
        </ul>
      </main>
    </div>
  );
}