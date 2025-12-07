// Layout.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import RightMenu from "./RightMenu";
import "./Layout.css";

const Layout: React.FC = () => {
  const [nav, setNav] = useState<
    "hero" | "assets" | "reports" | "calendar" | "team" | "settings"
  >("hero");

  return (
    <div className="app-shell">
      <TopBar />
      <div className="layout-body">
        <div className="page-content">
          <Outlet context={{ nav, setNav }} />
        </div>

        <div className="right-rail">
          <RightMenu pickedNav={nav} setNav={setNav} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
