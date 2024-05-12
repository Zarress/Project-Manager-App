import { useState } from "react";

export default function ProjectTasks({
  activeProjectDetails,
  addTaskToProject,
  clearTask,
}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleAddTask() {
    if (enteredTask.trim())
      addTaskToProject(activeProjectDetails.id, enteredTask);
      setEnteredTask('');
  }
  function handleChangeTaskName(event) {
    setEnteredTask(event.target.value);
  }
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-600">Tasks</h2>
      <div className="flex justify-between gap-2">
        <input
          value={enteredTask}
          type="text"
          className="py-2 px-4 bg-stone-200 rounded-sm w-3/4"
          placeholder="Enter task name ..."
          onChange={handleChangeTaskName}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 text-xs font-medium md:text-base rounded-md bg-stone-200 text-stone-700 hover:bg-stone-300"
        >
          + Add Task
        </button>
      </div>
      {activeProjectDetails.tasks.length === 0 && <p className="text-stone-600">No tasks added yet</p>}
      <ul className="flex flex-col gap-2">
        {activeProjectDetails.tasks.map((task, index) => {
          return (
            <li
              key={index}
              className="flex justify-between p-2 bg-stone-100 border border-stone-200 gap-6"
            >
              <p>{index + 1}</p>
              <p className="grow">{task}</p>
              <button
                onClick={() => clearTask(index)}
                className="hover:text-red-600"
              >
                Clear
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
