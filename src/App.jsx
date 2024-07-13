import NewProject from "./components/NewProject";
import NotSelected from "./components/NotSelected";
import Sidebar from "./components/Sidebar";
import Selected from "./components/Selected";

import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function createProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function cancelProjectCreation() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function selectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = <Selected project={selectedProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={createProject}
        onCancelProjectCreation={cancelProjectCreation}
      ></NewProject>
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NotSelected onAddProject={handleAddProject}></NotSelected>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProject}
        onSelectProject={selectProject}
        projects={projectsState.projects}
      ></Sidebar>
      {content}
    </main>
  );
}

export default App;
