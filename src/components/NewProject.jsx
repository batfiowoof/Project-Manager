import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 bg-gray-400 rounded-xl">
      <h2 className="flex justify-center mt-5 font-bold uppercase md:texxt-x ">
        Add a Project
      </h2>
      <menu className="flex items-center justify-center gap-4 my-4">
        <li>
          <button className="px-4 py-2 text-xs md:text-base rounded-md ">
            - Cancel
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-700 text-stone-400 hover:bg-gray-600 hover:text-stone-200">
            + Save
          </button>
        </li>
      </menu>
      <div className="">
        <Input label="Project Name" type="text" />
        <Input label="Project Description" textArea />
        <Input label="Project Deadline" type="date" />
      </div>
    </div>
  );
}
