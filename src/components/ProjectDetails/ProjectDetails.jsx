import { useRef } from "react";
import ProjectTasks from "./ProjectTasks/ProjectTasks";
import ConfirmationModal from "../ConfirmationModal";

export default function ProjectDetails({
  deleteProject,
  addTaskToProject,
  activeProjectDetails,
  clearTask,
}) {
  const dialogRef = useRef();
  const formattedDate = new Date (activeProjectDetails.dueDate).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  function handleDeleteProject() {
    deleteProject(activeProjectDetails.id);
  }
  
  function showConfirmationModal() {
    dialogRef.current.open();
  }

  return (
    <section className="flex flex-col gap-8 max-w-lg m-auto">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-stone-600">
            {activeProjectDetails.title}
          </h1>
          <button
            onClick={showConfirmationModal}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-200 text-stone-700 hover:bg-stone-300"
          >
            Delete project
          </button>
        </div>
        <p className="text-xl text-stone-400">
          {formattedDate}
        </p>
        <p className="text-xl text-stone-600">
          {activeProjectDetails.description}
        </p>
      </div>
      <div className="h-1 bg-stone-300"></div>

      <ProjectTasks
        activeProjectDetails={activeProjectDetails}
        addTaskToProject={addTaskToProject}
        clearTask={clearTask}
      />
      <ConfirmationModal onConfirmClick={handleDeleteProject} ref={dialogRef}>
        Are you sure you want to delete this whole project?
      </ConfirmationModal>
    </section>
  );
}
