import { useState, useEffect } from "react";

export default function ProjectMenu({
  showProjectForm,
  projectList,
  onSetActiveProject,
  activeProject,
}) {
  const [expanded, setExpanded] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (windowWidth > 768) setExpanded(true);
    else setExpanded(false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  function onShowProjectAddForm() {
    showProjectForm();
  }
  function handleActiveProject(id) {
    onSetActiveProject(id);
  }
  function handleToggle() {
    setExpanded((prev) => (prev ? false : true));
  }
  let cssClasses = "";
  let toggleButtonClasses = "";
  if (expanded) {
    cssClasses = " px-8 w-72 mr-screen md:w-72";
}
  else {
    cssClasses = " w-0";
  } 

  return (
    <aside className="flex z-10">
      <div
        className={
          "bg-stone-900 py-16 text-stone-50 rounded-r-xl overflow-x-hidden h-screen transition-all duration-300" +
          cssClasses
        }
      >
        <h1 className="text-xl font-bold">MY PROJECTS</h1>
        <button
          onClick={onShowProjectAddForm}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 my-8"
        >
          + Add Project
        </button>
        <ul className="flex flex-col gap-2">
          {projectList.map((project) => {
            const defaultLiClasses =
              "rounded-md hover:bg-stone-600 py-2 px-4 cursor-pointer";
            const liClasses =
              activeProject === project.id
                ? defaultLiClasses + " bg-stone-700"
                : defaultLiClasses;
            return (
              <li
                key={project.id}
                onClick={() => handleActiveProject(project.id)}
                className={liClasses}
              >
                {project.title}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={handleToggle}
        className={"font-bold text-2xl m-2 px-4 pb-1 rounded-md text-black bg-stone-300 h-12" + toggleButtonClasses}
      >
        {expanded && <div>&lt;</div>}
        {!expanded && <div>&gt;</div>}
      </button>
    </aside>
  );
}
