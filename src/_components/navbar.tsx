"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "./logos/jro-logo.png";
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { label: "Home", href: "/#main" },
    { label: "Tech Stack", href: "/#tech-stack" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    //{ label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/#main" className={styles.logoLink}>
          <Image src={logo} alt="Jono Rafael" width={32} height={32} className={styles.logoImage} />
          <span className="sr-only">Jono Rafael</span>
        </Link>
        <div className={styles.navDropdown}>
          <label htmlFor="nav-select" className="sr-only">
            Navigate sections
          </label>
          <select
            id="nav-select"
            defaultValue="/#main"
            className={styles.navSelect}
            onChange={(event) => router.push(event.target.value)}
          >
            {navLinks.map((link) => (
              <option key={link.href} value={link.href}>
                {link.label}
              </option>
            ))}
          </select>
        </div>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}