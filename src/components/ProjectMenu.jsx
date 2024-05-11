export default function ProjectMenu({
  showProjectForm,
  projectList,
  onSetActiveProject,
  activeProject,
}) {
  function onShowProjectAddForm() {
    showProjectForm();
  }
  function handleActiveProject(id) {
    onSetActiveProject(id);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
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
    </aside>
  );
}
