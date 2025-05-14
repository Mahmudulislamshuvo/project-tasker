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
  const [updateTask, setupdateTask] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setupdateTask(null);
  }

  const onAddtoCartEdit = (newTask, isAdd) => {
    if (isAdd) {
      setTask([...Task, newTask]);
    } else {
      setTask(
        Task.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setIsOpen(false);
    setupdateTask(null);
  };

  const editTask = (editTask) => {
    setupdateTask(editTask);
    setIsOpen(true);
  };

  const handleDeleteAllTask = () => {
    Task.length = 0;
    setTask([...Task]);
  };

  const HandleDelete = (TaskId) => {
    const afterDeletedTask = Task.filter((task) => TaskId !== task.id);
    setTask(afterDeletedTask);
  };

  const handleIsFevorite = (TaskId) => {
    console.log(TaskId);

    const taskIndex = Task.findIndex((taskss) => taskss.id === TaskId);
    const newFev = [...Task];
    newFev[taskIndex].isFavorite = !newFev[taskIndex].isFavorite;

    setTask(newFev);
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
              onAddTaskButtonClick={() => setIsOpen(true)}
              DeleteAllTaskClick={handleDeleteAllTask}
            />
            <TaskList
              Tasks={Task}
              editTask={editTask}
              HandleDelete={HandleDelete}
              onFevorite={handleIsFevorite}
            />
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <ReactModals
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          onSave={onAddtoCartEdit}
          updateTask={updateTask}
        />
      )}
    </>
  );
};

export default TaskBoard;
