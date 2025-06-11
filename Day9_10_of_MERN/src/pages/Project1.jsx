import React, { useEffect, useState } from "react";

const Project1 = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // For the first randering the components
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodos && Array.isArray(storedTodos)) {
      setTodoList(storedTodos);
    }
  }, []);

  // It run on the changing in todolist
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmerdTask = task.trim();
    if (!trimmerdTask) {
      return alert("Please Enter a Task!");
    }

    const isAlready = todoList.some(
      (item) => item.toLowerCase() === trimmerdTask.toLowerCase()
    );

    if (isAlready) {
      return alert("Duplicate Task!");
    }

    setTodoList([...todoList, task]);
    setTask("");
  };

  const inputChangeHandle = (e) => {
    setTask(e.target.value);
  };

  const deleteHandle = (item) => {
    const updatedTodo = todoList.filter((val) => val !== item);
    setTodoList(updatedTodo);
  };

  return (
    <div className="flex flex-col h-screen items-center  bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-white bg-green-600 px-6 py-3 rounded-2xl shadow-md mb-6">
        Todo App
      </h1>

      <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
        <input
          className="outline-none border border-green-500 rounded-lg px-4 py-2 w-64 focus:ring-2 focus:ring-green-400"
          placeholder="Enter your task here"
          type="text"
          value={task}
          onChange={inputChangeHandle}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add Task
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2">
        {todoList.map((item, idx) => (
          <li
            key={idx}
            className="bg-white shadow px-4 py-2 rounded-lg border-l-4 border-green-500"
          >
            <h3 className="flex capitalize justify-between">
              {`${idx + 1}. ${item}`}{" "}
              <span
                onClick={() => deleteHandle(item)}
                className="cursor-pointer font-bold capitalize"
              >
                delete
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project1;
