import React from "react";
import Header from "../layout/Header";
import Hero from "../sections/Hero";
import Elegance from "../sections/Elegance";
import Testimonials from "../sections/Testimoils";
import VideoPromo from "../sections/VideoPromo";
import InstagramFeed from "../sections/InstaSection";
import Footer from "../layout/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Elegance />
      <Testimonials />
      <VideoPromo />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Home;
