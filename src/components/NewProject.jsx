import { useRef } from "react";
import Input from "./Input";

import Modal from "./Modal";

export default function NewProject({ onAdd, onCancelProjectCreation }) {
  const modal = useRef();

  const projectNameRef = useRef();
  const projectDescriptionRef = useRef();
  const projectDeadlineRef = useRef();

  function handleSave() {
    const enteredTitle = projectNameRef.current.value;
    const enteredDescription = projectDescriptionRef.current.value;
    const enteredDeadline = projectDeadlineRef.current.value;

    //validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDeadline.trim().length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      deadline: new Date(enteredDeadline),
    });
  }

  function handleCancel() {
    onCancelProjectCreation();
  }

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-500 my-2">
          Invalid input!
        </h2>
        <p>No value entered. Please fill the input fields!</p>
      </Modal>
      <div className="w-[35rem] mt-16 bg-gray-400 rounded-xl">
        <h2 className="flex justify-center mt-5 font-bold uppercase md:texxt-x ">
          Add a Project
        </h2>
        <menu className="flex items-center justify-end gap-4 my-4 mx-4">
          <li>
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-xs md:text-base rounded-md "
            >
              - Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-700 text-stone-400 hover:bg-gray-600 hover:text-stone-200"
            >
              + Save
            </button>
          </li>
        </menu>
        <div className="">
          <Input label="Project Name" type="text" ref={projectNameRef} />
          <Input
            label="Project Description"
            textArea
            ref={projectDescriptionRef}
          />
          <Input
            label="Project Deadline"
            type="date"
            ref={projectDeadlineRef}
          />
        </div>
      </div>
    </>
  );
}
