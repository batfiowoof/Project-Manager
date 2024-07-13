import NewProject from "./NewProject";
import Button from "./Button";

export default function Sidebar({ onAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-800 text-white p-5 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:texxt-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="my-4">
            <button className="w-full text-left rounded-md hover:bg-slate-700">
              <h3 className="font-bold text-stone-200">{project.title}</h3>
            </button>
            <p className="text-stone-400">{project.description}</p>
            <p className="text-stone-400">{project.deadline.toDateString()}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
