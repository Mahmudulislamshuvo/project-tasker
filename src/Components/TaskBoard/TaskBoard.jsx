import { useState } from "react";
import ActionButtons from "./ActionButtons";
import Searchbar from "./Searchbar";
import TaskList from "./TaskList";
import ReactModals from "./ReactModal";

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

  function closeModal() {
    setIsOpen(false);
  }

  const onAddtoCart = (newTask) => {
    setTask([...Task, newTask]);
    setIsOpen(false);
  };
  return (
    <>
      <div className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <Searchbar />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionButtons onAddTaskButtonClick={() => setIsOpen(true)} />
            <TaskList Tasks={Task} />
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <ReactModals
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          onSave={onAddtoCart}
        />
      )}
    </>
  );
};

export default TaskBoard;
