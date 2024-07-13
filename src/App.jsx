import NewProject from "./components/NewProject";
import NotSelected from "./components/NotSelected";
import Sidebar from "./components/Sidebar";

import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar></Sidebar>
      <NotSelected></NotSelected>
    </main>
  );
}

export default App;
