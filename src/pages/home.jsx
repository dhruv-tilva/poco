import Header from "../component/header";
import HeroSection from "../component/hero-section";
import Dishes from "../component/dishes";
import Footer from "../component/footer";
import { useEffect } from "react";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Dishes />
      <Footer />
    </>
  );
};

export default Home;
