import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; //run `yarn tailwindcss -i ./src/app/globals.css -o ./src/app/tailwind.css --watch`
import data from "../_statics/user-data.json";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import Main from "./_main/page";
import TechStack from "./_tech_stack/page";
import Education from "./_education/page";
import Experience from "./_experience/page";
import Certifications from "./_certifications/page";
import Contact from "./_contact/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jono Rafael Obiniana - Profile",
  description: "Full-Stack Developer, Tech Enthusiast, and Lifelong Learner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="main" className="min-h-full flex flex-col">
        <Navbar />
        <Main />
        <TechStack />
        <Experience />
        <Education />
        {/*<Certifications />*/}
        <Contact />
        {children}
        {/*< Footer />*/}
      </body>
    </html>
  );
}
