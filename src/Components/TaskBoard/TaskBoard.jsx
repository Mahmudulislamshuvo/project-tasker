import ActionButtons from "./ActionButtons";
import Searchbar from "./Searchbar";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <>
      <div class="mb-20" id="tasks">
        <div class="container">
          <div class="p-2 flex justify-end">
            <Searchbar />
          </div>

          <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionButtons />
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
