import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddProject({ hideForm, addProjectToList}) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDesctiption] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addProjectToList({
        id: uuidv4(),
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
        tasks: []
    });
    hideForm();
  }

  function handleInputChange(identifier, value) {
    switch (identifier) {
      case "title":
        setEnteredTitle(value);
        break;
      case "description":
        setEnteredDesctiption(value);
        break;
      case "due-date":
        setEnteredDueDate(value);
        break;
    }
  }

  return (
    <section className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold my-8 uppercase text-stone-600">
        Creating a New Project
      </h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase text-stone-500"
          >
            Title
          </label>
          <input
            id="title"
            required
            type="text"
            onChange={(event) => handleInputChange("title", event.target.value)}
            className="py-2 px-4 bg-stone-200 rounded-sm rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-bold uppercase text-stone-500"
          >
            Description
          </label>
          <textarea 
            id="description"
            required
            type="text"
            onChange={(event) =>
              handleInputChange("description", event.target.value)
            }
            className="py-2 px-4 bg-stone-200 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="due-date"
            className="text-sm font-bold uppercase text-stone-500"
          >
            Due date
          </label>
          <input
            id="due-date"
            required
            type="date"
            onChange={(event) =>
              handleInputChange("due-date", event.target.value)
            }
            className="py-2 px-4 bg-stone-200 rounded-sm"
          />
        </div>
        <div className="flex gap-4 justify-end">
          <button
            onClick={hideForm}
            className="py-2 px-4 rounded-md hover:bg-stone-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-stone-700 text-stone-50 py-2 px-4 rounded-md hover:bg-stone-900"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
