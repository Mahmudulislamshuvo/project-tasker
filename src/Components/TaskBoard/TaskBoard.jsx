import { useState } from "react";
import ActionButtons from "./ActionButtons";
import Searchbar from "./Searchbar";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learning React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tegs: ["React", "Nextjs", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [Task, setTask] = useState([defaultTask]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onAddtoCart = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <Searchbar />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionButtons
              openModal={openModal}
              afterOpenModal={afterOpenModal}
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              DoingSomething={onAddtoCart}
            />
            <TaskList Tasks={Task} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
