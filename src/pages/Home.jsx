//rafce

import FromBeanToBrew from "../components/FromBeanToBrew";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import CoffeeThemeCards from "../components/CoffeeThemeCards";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #e0c9a6",
          margin: "40px 0",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          opacity: 0.5,
        }}
      />
      <HeroSection />
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #e0c9a6",
          margin: "40px 0",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          opacity: 0.5,
        }}
      />
      <FromBeanToBrew />
      <CoffeeThemeCards />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
