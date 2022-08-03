import "./Home.container.scss";
import gVideo from "../../assets/videos/gym_video_intro.mp4";
import NavBar from "../../components/navBar/NavBar.component";
// import { MdOutlineFitnessCenter } from "react-icons/md";
import { useEffect, useState } from "react";
import Features from "../../components/features/features.component";
import { CgGym } from "react-icons/cg";
import { MdNoFood } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbHeartbeat } from "react-icons/tb";
import Trainer from "../../components/trainer/Trainer.component";
import About from "../../components/about/About.component";

import trainer1 from "../../assets/images/abdalla-m-y1TF3eH-S6M-unsplash.jpg";
import trainer2 from "../../assets/images/aikomo-opeyemi-jYYP0Y4tYHo-unsplash.jpg";
import trainer3 from "../../assets/images/nathan-dumlao-NXMZxygMw8o-unsplash (1).jpg";
import trainer4 from "../../assets/images/subhaan-saleem-Jf7hr7ZQzg8-unsplash.jpg";

function Home() {
  const [toggler, setToggler] = useState(false);

  const menuToggle = () => {
    setToggler((t) => !t);
  };

  useEffect(() => {
    if (toggler) {
      document.querySelector(".motivationQuote").classList.add("hide");
      document.querySelector(".menuContainer").classList.add("open");
      document.querySelector(".menuToggler").classList.add("openMenu");
    } else {
      document.querySelector(".motivationQuote").classList.remove("hide");
      document.querySelector(".menuContainer").classList.remove("open");
      document.querySelector(".menuToggler").classList.remove("openMenu");
    }
  }, [toggler]);

  return (
    <div className="homeContainer">
      <section id="home">
        <video id="home" src={gVideo} autoPlay muted loop></video>
        <div className="motivationQuote">
          <h1>
            it hurts now <br />
            but one day it will be <br />
            your <b>" warm up "</b>
          </h1>
        </div>
      </section>
      <div className="videoOverLay"></div>
      <NavBar className="navBar" menuToggle={menuToggle}>
        <ul>
          <li className="home">
            <a href="#home" onClick={menuToggle}>
              <h4 className="active">HOME</h4>
            </a>
          </li>
          <li className="why">
            <a href="#why" onClick={menuToggle}>
              <h4>WHY?</h4>
            </a>
          </li>
          <li className="trainers">
            <a href="#trainers" onClick={menuToggle}>
              <h4>TRAINERS</h4>
            </a>
          </li>
          {/* <li className="contact">
            <a href="#contact" onClick={menuToggle}>
              <h4>CONTACT</h4>
            </a>
          </li> */}
          <li className="about">
            <a href="#about" onClick={menuToggle}>
              <h4>ABOUT</h4>
            </a>
          </li>
        </ul>
      </NavBar>
      <section id="why">
        <div className="title">
          <h6>why choose us ?</h6>
          <h1>push your limits forward</h1>
        </div>
        <div className="features">
          <Features
            title="Modern equipment"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
          >
            <CgGym className="logo"></CgGym>
          </Features>
          <Features
            title="Healthy nutrition plan"
            subTitle="Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
          >
            <MdNoFood className="logo"></MdNoFood>
          </Features>
          <Features
            title="Proffesponal training plan"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
          >
            <GiProgression className="logo"></GiProgression>
          </Features>
          <Features
            title="Unique to your needs"
            subTitle="Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
          >
            <TbHeartbeat className="logo"></TbHeartbeat>
          </Features>
        </div>
      </section>
      <section id="trainers">
        <div className="overlay">
          <h4>our team</h4>
          <h1>train with experts</h1>
          <div className="trainer">
            <Trainer image={trainer3}></Trainer>
            <Trainer image={trainer4}></Trainer>
            <Trainer image={trainer2}></Trainer>
            <Trainer image={trainer1}></Trainer>
          </div>
        </div>
      </section>
      {/* <section id="contact">contact</section> */}
      <section id="about">
        <div className="overlay">
          <About></About>
        </div>
      </section>
    </div>
  );
}

export default Home;
