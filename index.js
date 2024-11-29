
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import MultipleCard from "@/Components/MultipleCard";
import BlogSection from "@/Components/BlogSection";
import styles from "@/styles/Home.module.css";
import Services from "@/Components/Services";
import CookieConsent from "@/Components/CookieConsent";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <section className={styles.projectsSection}>
        <BlogSection />
      </section>
      <Services/>
      <MultipleCard />
      <CookieConsent/>
      <Footer />
    </>
  );
}
