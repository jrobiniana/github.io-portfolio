import Link from "next/link";
import Image from "next/image";
import logo from "./logos/jro-logo.png";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/#main" },
    { label: "Tech Stack", href: "/#tech-stack" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    //{ label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="flex w-full max-w-3xl items-center justify-between px-16 py-4 sm:mx-auto">
        <Link href="/#main" className="flex items-center gap-3">
          <Image src={logo} alt="Jono Rafael" width={32} height={32} className="h-8 w-8" />
          <span className="sr-only">Jono Rafael</span>
        </Link>
        <ul className="flex gap-8 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}