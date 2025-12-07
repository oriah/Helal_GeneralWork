// Home.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./Home.css";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import Assets from "./Assets";

type LayoutCtx = { nav: string };

const Home = () => {
  const { nav } = useOutletContext<LayoutCtx>();
  const [dataBuildings, setDataBuildings] = useState([]);
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/buildings");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("GET Data:", data);
        setDataBuildings(data);
      } catch (error) {
        console.error("Fetch error:", error);
        alert(error);
      }
    };

    fetchData();
  }, []);
  const filtered = useMemo(() => {
    const base =
      selectedCity === "all"
        ? dataBuildings
        : dataBuildings.filter((b) => (b.city || "").trim() === selectedCity);
    if (!search.trim()) return base;
    const q = search.trim();
    return base.filter(
      (b) => (b.city || "").includes(q) || (b.street || "").includes(q)
    );
  }, [dataBuildings, selectedCity, search]);
  return (
    <div className="home_container">
      <div className="home_hero">
        <Hero
          nav={nav}
          data={dataBuildings}
          selectedCity={selectedCity}
          onPickCity={setSelectedCity}
          onSearch={setSearch}
        />
        <Dashboard data={filtered} />
        {/* {nav === "hero" ? (
          <Dashboard />
        ) : nav === "assets" ? (
          <Assets />
        ) : (
          <h1>B</h1>
        )} */}
      </div>
    </div>
  );
};

export default Home;
