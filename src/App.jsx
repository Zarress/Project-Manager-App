import { useEffect } from "react";
import { useState } from "react";
import MainContent from "./components/MainContent";
import ProjectMenu from "./components/ProjectMenu";

const projectListFromLocalStorage = JSON.parse(localStorage.getItem('projectList')) 
  ? JSON.parse(localStorage.getItem('projectList')) 
  : [];

function App() {
  const [mode, setMode] = useState("no-project-selected");
  const [projectList, setProjectList] = useState(projectListFromLocalStorage);
  const [activeProjectId, setActiveProjectId] = useState("");

  useEffect(() => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  }, [projectList]);

  const activeProjectDetails = projectList.find(project => project.id === activeProjectId);

  function handleShowProjectAddForm() {
    setMode("project-add-form");
    setActiveProjectId("");
  }

  function handleHideProjectAddForm() {
    setMode("no-project-selected");
  }

  function hadnleAddProjectToList(newProject) {
    setProjectList((prevList) => [...prevList, newProject]);
  }

  function onSetActiveProject(id) {
    setActiveProjectId(id);
    setMode("project-details")
  }

  function handleDeleteProject(id) {
    setProjectList(prevList => prevList.filter(project => project.id !== id));
    setMode("no-project-selected");
  }

  function handleAddTaskToProject (projectId, taskName) {
    const updatedProjects = projectList.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          tasks: [...project.tasks, taskName]
        };
      }
      return project;
    });
    setProjectList(updatedProjects);
  }

  function handleClearTask(index) {
    const updatedProjects = projectList.map(project => {
      if (project.id === activeProjectId) {
        return {
          ...project,
          tasks: [...project.tasks.filter((task, i) => i !== index)]
        };
      }
      return project;
    });
    setProjectList(updatedProjects);
  }

  return (
    <main className="flex">
      <ProjectMenu
        showProjectForm={handleShowProjectAddForm}
        projectList={projectList}
        onSetActiveProject={onSetActiveProject}
        activeProject={activeProjectId}
      />
      <MainContent
        mode={mode}
        showProjectForm={handleShowProjectAddForm }
        hideProjectForm={handleHideProjectAddForm}
        addProjectToList={hadnleAddProjectToList}
        deleteProject={handleDeleteProject}
        addTaskToProject={handleAddTaskToProject}
        activeProjectDetails={activeProjectDetails}
        clearTask={handleClearTask}
      />
    </main>
  );
}

export default App;
