import NewProject from "./components/NewProject";
import NotSelected from "./components/NotSelected";
import Sidebar from "./components/Sidebar";

import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject></NewProject>;
  } else if (projectsState.selectedProject === undefined) {
    content = <NotSelected onAddProject={handleAddProject}></NotSelected>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject}></Sidebar>
      {content}
    </main>
  );
}

export default App;
