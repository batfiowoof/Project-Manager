import NewProject from "./NewProject";
import Button from "./Button";

export default function Sidebar({ onAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-800 text-white p-5 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:texxt-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </aside>
  );
}
