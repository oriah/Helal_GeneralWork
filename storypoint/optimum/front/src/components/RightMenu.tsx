import React from "react";
import "./Rightmenu.css";
import dashboardImg from "../assets/dashboard.png";
import OPTIMUMImg from "../assets/OPTIMUM.png";
import briefcaseImg from "../assets/briefcase.png";
import calendarImg from "../assets/calendar.png";
import teamImg from "../assets/team.png";
import serviceImg from "../assets/service.png";
import settingsImg from "../assets/settings.png";
import { NavLink } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const RightMenu = ({ setNav, pickedNav }) => {
  const navigations = [
    { id: "hero", name: "דשבורד", img: dashboardImg },
    { id: "assets", name: "הנכסים", img: briefcaseImg },
    { id: "calendar", name: "לוח שנה", img: calendarImg },
    { id: "teams", name: "צוותים", img: teamImg },
    { id: "service", name: "קריאות שירות", img: serviceImg },
    { id: "settings", name: "הגדרות", img: settingsImg },
  ];
  const NAV = [
    { to: "/", name: "דשבורד", img: dashboardImg },
    { to: "/assets", name: "הנכסים", img: briefcaseImg },
    { to: "/calendar", name: "לוח שנה", img: calendarImg },
    { to: "/team", name: "צוותים", img: teamImg }, // was "teams" → use /team
    { to: "/service", name: "קריאות שירות", img: serviceImg },
    { to: "/settings", name: "הגדרות", img: settingsImg },
  ];

  return (
    <div className="right-menu-container">
      <div className="menu-items-container">
        {NAV.map((nav, ind) => {
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={nav.to != pickedNav ? "menu-item" : "menu-item picked"}
              onClick={() => {
                setNav(nav.to);
              }}
            >
              <img className="menu-item-img" src={nav.img} />
              <span className="item-text">{nav.name}</span>
            </NavLink>
          );
        })}

        <div className="menu-footer-container">
          <div className="menu-footer">
            <img src={OPTIMUMImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
