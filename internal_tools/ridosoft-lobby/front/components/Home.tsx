import { useState } from "react";
import "./Home.css";
import {
  FaFolderOpen,
  FaRegNoteSticky,
  FaSquareWebAwesome,
} from "react-icons/fa6";
import { CgMonday } from "react-icons/cg";
import { CiImageOn, CiSearch } from "react-icons/ci";

const Home = () => {
  const projects = [
    {
      id: 1,
      name: "Triangle K",
      monday: "https://ridosoft.monday.com/boards/1996088105",
      img: "trainglek.png",
      docs: "https://trianglek-d.ridosoft.com",
      whatsapp: "JgqIyYjkKgfKQ6gMlaePll?mode=ems_copy_h_c",
      rank: 10,
      graphics: "link to X drive",
      build: "link to build in drive",
      website: "https://trianglek-hq.co.il/",
    },
    {
      id: 2,
      name: "Sukkah Depot",
      monday: "https://ridosoft.monday.com/boards/1995880202",
      img: "sukkahDepot.png",
      docs: "https://sukkahDepot-d.ridosoft.com",
      whatsapp: "link to whats",
      rank: 9,
      graphics: "link to X drive",
      build: "link to build in drive",
      website: "https://sukkahdepot-hq.co.il",
    },
    {
      id: 3,
      name: "Optimum",
      monday: "https://ridosoft.monday.com/boards/2055955787",
      img: "optimum.png",
      docs: "https://optimum-d.ridosoft.com",
      whatsapp: "link to whats",
      rank: 8,
      graphics: "link to X drive",
      build: "link to build in drive",
      website: "https://optimum-hq.co.il/",
    },
    {
      id: 4,
      name: "Optimum",
      monday: "https://ridosoft.monday.com/boards/2055955787",
      img: "optimum.png",
      docs: "https://optimum-d.ridosoft.com",
      whatsapp: "link to whats",
      rank: 8,
      graphics: "link to X drive",
      build: "link to build in drive",
      website: "https://optimum-hq.co.il/",
    },
    {
      id: 5,
      name: "Optimum",
      monday: "https://ridosoft.monday.com/boards/2055955787",
      img: "optimum.png",
      docs: "https://optimum-d.ridosoft.com",
      whatsapp: "link to whats",
      rank: 8,
      graphics: "link to X drive",
      build: "link to build in drive",
      website: "https://optimum-hq.co.il/",
    },
    {
      id: 6,
      name: "Optimum",
      monday: "https://ridosoft.monday.com/boards/2055955787",
      img: "optimum.png",
      docs: "https://optimum-d.ridosoft.com",
      whatsapp: "link to whats",
      rank: 8,
      graphics: "link to X drive",
      build: "link to build in drive",
      website: "https://optimum-hq.co.il/",
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const openLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const searchProject = (value: string) => {
    if (!value) {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects.filter((i) =>
      i.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    setFilteredProjects(filtered);
  };

  return (
    <div>
      <div className="home-title-wrapper">
        <h1 className="home-title-text">Ridosoft Projects</h1>
      </div>
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input
          className="search-inp"
          placeholder=" search.."
          onChange={(e) => {
            searchProject(e.target.value);
          }}
        />
      </div>
      <div className="cards">
        {filteredProjects.map((project) => {
          return (
            <div className="card-container" key={project.id}>
              <h1 className="project-name">
                {" "}
                {project.name} ~ {project.rank}
              </h1>
              <img
                className="project-img"
                src={`../src/assets/${project.img}`}
                alt="project"
                onClick={() => {
                  openLink(project.website);
                }}
              />
              <div className="card-content">
                <div className="card-info">
                  <span
                    className="special"
                    onClick={() => {
                      openLink(project.website);
                    }}
                  >
                    <FaSquareWebAwesome />
                    <span className="key">website:</span>{" "}
                    <span className=""> {project.website}</span>
                  </span>
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        openLink(project.monday);
                      }}
                    >
                      <CgMonday />
                      <span className="key">monday:</span>{" "}
                      <span className=""> {project.monday}</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="special">
                      <CiImageOn />
                      <span className="key">graphics:</span>{" "}
                      <span className=""> {project.graphics}</span>
                    </span>
                  </div>
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        window.open(
                          "https://chat.whatsapp.com/JgqIyYjkKgfKQ6gMlaePll",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <FaSquareWebAwesome />
                      <span className="key">WhatsApp Group:</span>{" "}
                      <span>Open Chat</span>
                    </span>
                  </div>
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        openLink(project.docs);
                      }}
                    >
                      <FaRegNoteSticky />
                      <span className="key">docs:</span>{" "}
                      <span className=""> {project.docs}</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="special">
                      <FaFolderOpen />
                      <span className="key">build:</span>{" "}
                      <span className=""> {project.build}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
