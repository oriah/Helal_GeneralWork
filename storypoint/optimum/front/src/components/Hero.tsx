// Hero.tsx
import React, { useEffect, useMemo, useState } from "react";
import "./Hero.css";
import bell_iconImg from "../assets/bell_icon.png";
import msg_iconImg from "../assets/msg_icon.png";
import userImg from "../assets/user.png";
import top_bgImg from "../assets/top_bg.png";
import add_bImg from "../assets/add_b.png";
import servive_allImg from "../assets/servive_all.png";
import reportImg from "../assets/report.png";
import filterImg from "../assets/filter.png";
import apartmentImg from "../assets/apartment.png";
import box_imgImg from "../assets/box_img.png";

type Props = {
  nav?: string;
  data: Building[];
};

const Hero: React.FC<Props> = ({
  nav,
  data,
  selectedCity,
  onPickCity,
  onSearch,
}) => {
  const [pickedFilter, setPickedFilter] = useState<string>("all");
  const [dataBuildings, setDataBuildings] = useState<Building[]>([]);
  const [filteredCards, setFilteredCards] = useState<Building[]>([]);
  const [cityCounts, setCityCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const list = Array.isArray(data) ? data : [];
    setDataBuildings(list);
    setFilteredCards(list);
    setPickedFilter("all");
  }, [data]);

  useEffect(() => {
    const counts = (data || []).reduce((acc: Record<string, number>, b) => {
      const city = (b.city || "ללא עיר").trim();
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});
    setCityCounts(counts);
  }, [data]);

  const cityItems = useMemo(
    () => Object.entries(cityCounts).map(([city, count]) => ({ city, count })),
    [cityCounts]
  );
  const handleFilterCards = (picked: string) => {
    if (!picked || picked === "all") {
      setPickedFilter("all");
      setFilteredCards(dataBuildings);
      return;
    }
    setPickedFilter(picked);
  };

  return (
    <div>
      <div className="hero-body-container">
        <div className="top-body">
          <div className="top-left-body">
            <div className="top-left-body-inner">
              <span className="top-left-body-inner-title">פעולות מהירות</span>
              <div className="top-left-body-inner-item">
                <img src={add_bImg} />
                <span>
                  הוסף בניין חדש
                  <br />
                </span>
              </div>
              <div className="top-left-body-inner-item">
                <img src={servive_allImg} />
                <span>
                  צור קריאת שירות
                  <br />
                </span>
              </div>
              <div className="top-left-body-inner-item">
                <img src={reportImg} />
                <span>
                  הפק דוח חודשי
                  <br />
                </span>
              </div>
            </div>
          </div>

          <div className="top-right-body">
            <span className="top-right-body-content">
              <div className="stats-container">
                <div className="stat">
                  <div className="stat-number">{dataBuildings.length}</div>
                  <div className="stat-label">סה"כ נכסים</div>
                </div>
                <div className="stat">
                  <div className="stat-number">
                    {Object.keys(cityCounts).length}
                  </div>
                  <div className="stat-label">ערים ייחודיות</div>
                </div>
                <div className="stat">
                  <div className="stat-number">12</div>
                  <div className="stat-label">קריאות פתוחות</div>
                </div>
              </div>
            </span>
            <img className="stats-image" src={top_bgImg} />
          </div>
        </div>
      </div>

      <div>
        <div className="hero-filter-search-container">
          <input
            className="search-inp"
            placeholder="חיפוש נכס"
            onChange={(e) => {
              const q = e.target.value.trim();
              if (!q) {
                handleFilterCards(pickedFilter);
                return;
              }
              const base =
                pickedFilter === "all"
                  ? dataBuildings
                  : dataBuildings.filter(
                      (c) => (c.city || "").trim() === pickedFilter
                    );
              setFilteredCards(
                base.filter(
                  (b) =>
                    (b.city || "").includes(q) || (b.street || "").includes(q)
                )
              );
            }}
          />
          <img className="filter-img" src={filterImg} />
          <span>סינון</span>
        </div>

        <div className="hero-place-menu">
          <span
            className={`place-menu-item ${
              pickedFilter === "all" ? "active" : ""
            }`}
            onClick={() => onPickCity("all")}
          >
            כל הנכסים
          </span>

          {cityItems.map(({ city, count }) => (
            <div
              className={`place-menu-item ${
                pickedFilter === city ? "active" : ""
              }`}
              key={city}
              onClick={() => onPickCity(city)}
            >
              <img src={apartmentImg} />

              <span className="city-count">{count}</span>
              <span className="city-name">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
