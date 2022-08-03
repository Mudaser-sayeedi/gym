import "./NavBar.component.scss";
import { FaGem } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

function NavBar({ children, menuToggle }) {
  // GLOBAL JS CODE in mobile
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const litsItems = document.querySelectorAll("header div ul li");
    // console.log(window.scrollY);
    let current = "";
    sections.forEach((section) => {
      // console.log(section.offsetTop);
      if (window.scrollY > section.offsetTop - section.clientHeight / 2) {
        const sectionName = section.getAttribute("id");
        // console.log(sectionName);
        current = sectionName;
      }
    });

    litsItems.forEach((item) => {
      if (item.getAttribute("class") === current) {
        item.children[0].children[0].classList.add("active");
      } else {
        item.children[0].children[0].classList.remove("active");
      }
    });
  });

  // GLOBAL JS CODE in desktop
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const litsItems = document.querySelectorAll("header nav ul li");
    // console.log(window.scrollY);
    let current = "";
    sections.forEach((section) => {
      // console.log(section.offsetTop);
      if (window.scrollY > section.offsetTop - section.clientHeight) {
        const sectionName = section.getAttribute("id");
        // console.log(sectionName);
        current = sectionName;
      }
    });

    litsItems.forEach((item) => {
      if (item.getAttribute("class") === current) {
        item.children[0].children[0].classList.add("active");
        if (item.getAttribute("class") === "home") {
          document.querySelector(".motivationQuote").classList.remove("hide");
        } else {
          document.querySelector(".motivationQuote").classList.add("hide");
        }
      } else {
        item.children[0].children[0].classList.remove("active");
      }
    });
  });

  return (
    <header className="header">
      <nav>
        <div className="companyLogo">
          <FaGem className="rightLogo" size={40} />
          <h1>
            DIAMOND <span>GYM</span>
          </h1>
        </div>
        <div className="linksContainer">{children}</div>
        <div className="menuToggler" onClick={menuToggle}>
          <BiMenuAltRight size={40} />
        </div>
      </nav>
      <div className="menuContainer">{children}</div>
    </header>
  );
}

export default NavBar;

/* <ul>
          <li className="home">
            <a href="#home">
              <h4 className="active">HOME</h4>
            </a>
          </li>
          <li className="schedules">
            <a href="#schedules">
              <h4>SCHEDULES</h4>
            </a>
          </li>
          <li className="trainers">
            <a href="#trainers">
              <h4>TRAINERS</h4>
            </a>
          </li>
          <li className="contact">
            <a href="#contact">
              <h4>CONTACT</h4>
            </a>
          </li>
          <li className="about">
            <a href="#about">
              <h4>ABOUT</h4>
            </a>
          </li>
        </ul> */
