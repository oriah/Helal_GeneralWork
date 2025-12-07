import { useState } from "react";
import "./Providers.css";
import { FaCalendarWeek, FaRegNoteSticky, FaWhatsapp } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoTimeSharp } from "react-icons/io5";

const Recruits = () => {
  const projects = [
    {
      id: 1,
      name: "Stas",
      img: "provider.jpg",
      monday:
        "https://ridosoft.monday.com/boards/1362727235/views/33730969/pulses/2123597503",

      whatsapp: "972547875670",
      status: "waiting for exam",
    },
    {
      id: 2,
      name: "Roma",
      img: "provider.jpg",
      monday:
        "https://ridosoft.monday.com/boards/1362727235/views/33730969/pulses/2124422956",
      whatsapp: "972546581013",
      status: "waiting for interview 2 with ori",
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
        <h1 className="home-title-text">Ridosoft Providers</h1>
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
              <h2 className="project-name"> {project.name}</h2>
              <img
                className="project-img"
                src={`../src/assets/${project.img}`}
                alt="project"
              />
              <div className="card-content">
                <div className="card-info">
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        window.open(
                          `https://wa.me/${project.whatsapp}`,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <FaWhatsapp />
                      <span className="key">WhatsApp:</span>{" "}
                      <span>Open Chat</span>
                    </span>
                  </div>
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        openLink(project.monday);
                      }}
                    >
                      <FaRegNoteSticky />
                      <span className="key">monday</span>{" "}
                      {/* <span className=""> {project.monday}</span> */}
                    </span>
                  </div>
                  <div className="">
                    <span className="special">
                      <FaCalendarWeek />
                      <span className="key">Status:</span>{" "}
                      <span className=""> {project.status}</span>
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

export default Recruits;
