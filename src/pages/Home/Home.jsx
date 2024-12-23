import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero_banner from "../../assets/hero_banner.jpg";
import Hero_title from "../../assets/hero_title.png";
import play_btn from "../../assets/play_icon.png";
import info_btn from "../../assets/info_icon.png";
import Titlecard from "../../components/Titlecard/Titlecard"
import Footer from "../../components/Footer/Footer"
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero_banner">
        <img src={Hero_banner} alt="" className="hero-img" />
        <div className="hero_caption">
          <img src={Hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secreat ancient order , a young man living
            in modern Istabul embarks on a quest to save the city from an
            immortal enemy{" "}
          </p>
          <div className="hero-btns">
            <button className="btn" > <img src={play_btn} alt="" />Play</button>
            <button className="btn dark-btn" > <img src={info_btn} alt="" />More Info</button>
          </div>
          <Titlecard/>
        </div>
      </div>
      <div className="more-cards">       
      <Titlecard title={"Blockbuster movies"} category={"top_rated"}/>
      <Titlecard title={"Only on Netflix"} category={"popular"}/>
      <Titlecard title={"Upcoming"} category={"upcoming"}/>
      <Titlecard title={"Top pics for you"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
