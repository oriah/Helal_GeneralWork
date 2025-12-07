import "./Navbar.css";
import LogoImg from "../src/assets/logo.png";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { RiPhoneFindLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="top-logo-name">
        <img src={LogoImg} className="logo-img" />{" "}
        <h2 className="logo-name">Ridosoft Lobby</h2>
      </div>
      <div className="nav-btns">
        <Link to="/" className="nav-item">
          <FaHome />
          Home
        </Link>
        <Link to="/projects" className="nav-item">
          <GrProjects />
          Projects
        </Link>
        <Link to="/providers" className="nav-item">
          <FaUserFriends />
          Providers
        </Link>
        <Link to="/Recruits" className="nav-item">
          <RiPhoneFindLine />
          Recruit
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
