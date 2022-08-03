import Button from "../button/Button.component";
import "./About.component.scss";
import { useNavigate } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsFillHeartFill,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";

function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutContainer">
      <div className="aboutGym">
        <h1>DIAMOND GYM</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut dolore facilisis.
        </p>
      </div>
      <div className="buttonContainer">
        <Button onClick={() => navigate("/loginMis")}>Gym MIS</Button>
      </div>
      <div className="connectionContainer">
        <div className="socialMediaContainer">
          <h3>Social Media</h3>
          <div className="socialMedia">
            <h5>
              <BsFacebook style={{ marginRight: "5" }}></BsFacebook> Facebook
            </h5>
            <h5>
              <BsInstagram style={{ marginRight: "5" }}></BsInstagram> Instagram
            </h5>
            <h5>
              <BsYoutube style={{ marginRight: "5" }}></BsYoutube> Youtube
            </h5>
            <h5>
              <SiGmail style={{ marginRight: "5" }}></SiGmail> Gmail
            </h5>
            <h5>
              <BsTwitter style={{ marginRight: "5" }}></BsTwitter> Twitter
            </h5>
          </div>
        </div>
        <div className="linksContainer">
          <h3>Links</h3>
          <div className="links">
            <a href="/">
              <h5>About</h5>
            </a>
            <a href="/">
              <h5>Blog</h5>
            </a>
            <a href="/">
              <h5>Classes</h5>
            </a>
            <a href="/">
              <h5>Contact</h5>
            </a>
          </div>
        </div>
        <div className="SupportContainer">
          <h3>Support</h3>
          <div className="support">
            <h5>Login</h5>
            <h5>My Account</h5>
            <h5>Subscribe</h5>
            <h5>Contact</h5>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright {<BiCopyright></BiCopyright>}2022 All rights reserved</p>
        <p>
          Made with
          {
            <BsFillHeartFill
              style={{ color: "red", marginRight: "5", marginLeft: "5" }}
            ></BsFillHeartFill>
          }{" "}
          by <span>GreenHouse</span>
        </p>
      </div>
    </div>
  );
}

export default About;
