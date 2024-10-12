import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: "01",
    title: "Sakura Kitchen",
    description: [
      "• Implemented a responsive website using Tailwind CSS, Firebase, and React. <br />",
      "• Designed and developed a user-friendly Login page with multiple authentication options, including Email/Password, Google Sign-in, and GitHub Sign-in. <br />",
      "• The View Profile section on the home page will only work if the user is logged in. If the user is not logged in, clicking on the section will redirect them to the login page."
    ],
    images: [
      "https://i.ibb.co/ZLb0nZv/1.png",
      "https://i.ibb.co/NTbwKBg/2.png"
    ],
    links: {
      "liveLink": "https://chef-recipe-f656d.web.app/",
      "githubClientSide": "https://github.com/EftekharAlam2/sakura-kitchen-client-side",
      "githubServerSide": "https://github.com/EftekharAlam2/sakura-kitchen-server-side"
    }
  },
  {
    id: "02",
    title: "GameToys",
    description: [
      "• Created a dynamic navbar displaying the website logo, name, and navigation options based on user login status, improving navigation and user experience. <br />",
      "• Developed a private route for logged-in users to manage their added toys, allowing updates and deletion of toy information, providing a seamless toy management experience. <br />",
      "• Implemented a public route to display all toys with a search system based on toy names and pagination for optimal results, facilitating easy exploration and finding desired toys."
    ],
    images: [
      "https://i.ibb.co/t293K0B/4.png",
      "https://i.ibb.co/CWKkWrj/6.png"
    ],
    links: {
      liveLink: "https://video-gaming-toys.web.app/",
      githubClientSide: "https://github.com/EftekharAlam2/GameToys-client-side",
      githubServerSide: "https://github.com/EftekharAlam2/GameToys-server-side"
    }
  }
]

const Project = () => {
  const [active, setActive] = useState("");
  const { ref: projectRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 mt-10 text-center" id="project">My Projects</h2>
      <div ref={projectRef}>
        {inView && (
          <nav className="fixed top-1/2 left-5 transform -translate-y-1/2">
            <ul className="space-y-6">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={`cursor-pointer text-black opacity-60 ${
                    active === project.id ? 'opacity-100 font-bold' : ''
                  }`}
                >
                  <Link
                    to={project.id}
                    smooth={true}
                    duration={500}
                    onSetActive={() => setActive(project.id)}
                    spy={true}
                    offset={-50}
                    className="text-xl"
                  >
                    {project.id}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div>
          {projects.map((project) => (
            <Element
              key={project.id}
              name={project.id}
              className="h-screen flex justify-center items-center bg-slate-100"
            >
              <div className="card card-compact w-9/12 md:w-10/12 bg-base-100 shadow-xl">
                <figure>
                  <img src={project.images[0]} className="w-3/6" />
                  <div className="">
                    <img src={project.images[1]} alt="" />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: project.description.join('') }} />
                  <div className="mt-3 flex flex-col md:flex-row gap-1">
                    <a
                      href={project.links.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-actions">
                        <button className="btn btn-outline btn-accent btn-sm">
                          Live Link
                        </button>
                      </div>
                    </a>
                    <a
                      href={project.links.githubClientSide}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-actions">
                        <button className="btn btn-outline btn-accent btn-sm">
                          Github-Client-Side
                        </button>
                      </div>
                    </a>
                    <a
                      href={project.links.githubServerSide}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-actions">
                        <button className="btn btn-outline btn-accent btn-sm">
                          Github-Server-Side
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Element>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
