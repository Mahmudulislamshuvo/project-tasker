import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80%",
    maxWidth: "90%",
    width: "500px",
    padding: "20px",
    backgroundColor: "#1f2937",
    borderRadius: "8px",
    overflowY: "auto",
    marginTop: "50px",
  },
};

Modal.setAppElement("#root");

const ReactModals = ({ closeModal, modalIsOpen, onSave, updateTask }) => {
  const addToTaskonj = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tegs: [],
    priority: "",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState(updateTask || addToTaskonj);
  const [isAdd, setIAdd] = useState(Object.is(updateTask, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tegs") {
      value = value.split(",");
    }
    setTasks({ ...tasks, [name]: value });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Task Modal"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-white"
        >
          <IoMdCloseCircle className="w-6 h-6 text-red-500 cursor-pointer" />
        </button>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="mb-2 text-center text-lg font-bold text-white">
            {isAdd ? "Create a Task" : "Edit Task"}
          </h2>

          <div className="space-y-4">
            {/* Title Field */}
            <div className="space-y-1">
              <label htmlFor="title" className="text-sm text-white">
                Title
              </label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-white"
                type="text"
                name="title"
                id="title"
                value={tasks.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm text-white">
                Description
              </label>
              <textarea
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-white min-h-[120px] lg:min-h-[180px]"
                name="description"
                id="description"
                value={tasks.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {/* Tags Field */}
              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm text-white">
                  Tags
                </label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-white"
                  type="text"
                  name="tegs"
                  id="tegs"
                  value={tasks.tegs}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Priority Field */}
              <div className="space-y-2">
                <label htmlFor="priority" className="text-sm text-white">
                  Priority
                </label>
                <select
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-white"
                  name="priority"
                  id="priority"
                  value={tasks.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={closeModal}
              className="bg-red-600 text-white rounded-md px-4 py-2 hover:opacity-80 transition-all"
            >
              Close
            </button>
            <button
              onClick={() => onSave(tasks, isAdd)}
              type="submit"
              className="bg-blue-600 text-white rounded-md px-4 py-2 hover:opacity-80 transition-all"
            >
              {isAdd ? "Add Task" : "Update"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ReactModals;
