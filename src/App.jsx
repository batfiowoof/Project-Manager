import NewProject from "./components/NewProject";
import NotSelected from "./components/NotSelected";
import Sidebar from "./components/Sidebar";
import Selected from "./components/Selected";
import NewTask from "./components/NewTask";

import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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

  function deleteProject(id) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== id
      );

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  function clearProjects() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [],
        selectedProjectId: undefined,
      };
    });
  }

  function addTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  let content = (
    <Selected
      project={selectedProject}
      onDelete={deleteProject}
      onTaskAdd={addTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );

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
    <main className="h-screen flex gap-8 bg-gray-200">
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
