import React from "react";
import Hero from "../sections/Hero";
import Testimonials from "../sections/Testimoils";
import VideoPromo from "../sections/VideoPromo";
import InstagramFeed from "../sections/InstagramFeed";
import Container from "../sections/Container";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Container />
      <VideoPromo />
      <Testimonials />
      <InstagramFeed />
    </div>
  );
};

export default Home;
