import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

const TodoListContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const todoListName = useRef(null);

  const createTodoList = () => {
    let todoObj = {
      listName: todoListName.current.value,
      tasks: [],
    };

    let todoArr = [...todoList];
    todoArr.push(todoObj);
    setTodoList(todoArr);
  };

  return (
    <div className="w-9/12 my-8 mx-auto bg-slate-100 p-6">
      <div className="flex flex-wrap">
        {todoList.map((list, index) => (
          <TodoList
            key={index}
            listName={list.listName}
            tasks={list.tasks}
            index={index}
          ></TodoList>
        ))}
      </div>
      <div>
        <h3 className="my-2 font-bold text-lg">Create your own TODO List!!!</h3>
        <div className="flex items-center">
          <input
            ref={todoListName}
            type="text"
            className="px-4 py-2 outline-none border-blue-400 border-2 bg-transparent rounded-lg
            focus:border-purple-400"
          ></input>
          <button
            className="px-4 py-2 bg-purple-400 text-white font-bold rounded-lg ml-2 hover:bg-purple-900"
            onClick={createTodoList}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListContainer;
