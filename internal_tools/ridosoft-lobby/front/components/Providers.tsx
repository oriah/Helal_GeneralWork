import { useState } from "react";
import "./Providers.css";
import { FaCalendarWeek, FaRegNoteSticky, FaWhatsapp } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoTimeSharp } from "react-icons/io5";

const Providers = () => {
  const projects = [
    {
      id: 1,
      name: "Irena",
      img: "provider.jpg",
      docs: "https://irena.ridosoft.com/",
      whatsapp: "JgqIyYjkKgfKQ6gMlaePll?mode=ems_copy_h_c",
      hoursPerWeek: 40,
      currentHours: 20,
    },
    {
      id: 2,
      name: "Shachar",
      img: "provider.jpg",
      docs: "https://shachar.ridosoft.com/",
      whatsapp: "JgqIyYjkKgfKQ6gMlaePll?mode=ems_copy_h_c",
      hoursPerWeek: 30,
      currentHours: 20,
    },
    {
      id: 3,
      name: "Helal",
      img: "provider.jpg",
      docs: "https://helal.ridosoft.com/",
      whatsapp: "JgqIyYjkKgfKQ6gMlaePll?mode=ems_copy_h_c",
      hoursPerWeek: 40,
      currentHours: 20,
    },
    {
      id: 4,
      name: "Ido",
      img: "provider.jpg",
      docs: "https://ido.ridosoft.com/",
      whatsapp: "JgqIyYjkKgfKQ6gMlaePll?mode=ems_copy_h_c",
      hoursPerWeek: 40,
      currentHours: 20,
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
                          "https://chat.whatsapp.com/JgqIyYjkKgfKQ6gMlaePll",
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
                        openLink(project.docs);
                      }}
                    >
                      <FaRegNoteSticky />
                      <span className="key">docs:</span>{" "}
                      <span className=""> {project.docs}</span>
                    </span>
                  </div>
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        openLink(project.docs);
                      }}
                    >
                      <FaCalendarWeek />
                      <span className="key">Hours Per Week:</span>{" "}
                      <span className=""> {project.hoursPerWeek}</span>
                    </span>
                  </div>
                  <div className="">
                    <span
                      className="special"
                      onClick={() => {
                        openLink(project.docs);
                      }}
                    >
                      <IoTimeSharp />
                      <span className="key">Current Hours:</span>{" "}
                      <span className=""> {project.currentHours}</span>
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

export default Providers;
