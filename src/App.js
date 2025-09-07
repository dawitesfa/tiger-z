import { About } from "./components/about/About";
import { Careers } from "./components/careers/Careers";
import { Divisions } from "./components/divisions/Divisions";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Contact } from "./components/contact/Contact";
import { Sustainability } from "./components/sustainability/Sustainability";
import { Footer } from "./components/footer/Footer";
export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Sustainability />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
