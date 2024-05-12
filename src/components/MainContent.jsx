import AddProject from "./AddProject";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

export default function MainContent({
  mode,
  showProjectForm,
  hideProjectForm,
  addProjectToList,
  deleteProject,
  addTaskToProject,
  activeProjectDetails,
  clearTask
}) {
  function onShowProjectAddForm() {
    showProjectForm();
  }
  function onHideProjectAddForm() {
    hideProjectForm();
  }

  return (
    <main className="mt-20 px-4 w-full absolute md:static z-0">
      {mode === "no-project-selected" && (
        <section className="text-center flex flex-col gap-6 max-w-lg mx-auto">
          <img
            src="./src/assets/no-projects.png"
            alt="No projects"
            className="w-32 m-auto"
          ></img>
          <h1 className="text-xl font-bold">No Project Selected</h1>
          <p>Select a project or get started with new one</p>
          <button
            onClick={onShowProjectAddForm}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Create new project
          </button>
        </section>
      )}
      {mode === "project-add-form" && (
        <AddProject
          hideForm={onHideProjectAddForm}
          addProjectToList={addProjectToList}
        />
      )}
      {mode === "project-details" && (
        <ProjectDetails
          deleteProject={deleteProject}
          addTaskToProject={addTaskToProject}
          activeProjectDetails={activeProjectDetails}
          clearTask={clearTask}
        />
      )}
    </main>
  );
}
