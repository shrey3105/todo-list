import { useRef, useState } from "react";
import Task from "./Task";

const TodoList = ({ listName, tasks }) => {
  const [taskArr, setTaskArr] = useState(tasks);
  const taskName = useRef(null);

  const addTask = () => {
    let arr = [...taskArr];
    arr.push(taskName.current.value);
    setTaskArr(arr);
    taskName.current.value = "";
  };

  const handleOnDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    //event.preventDefault();
    let task = event.dataTransfer.getData("text/plain");
    console.log(task);
    let arr = [...taskArr, task];
    setTaskArr(arr);
  };

  return (
    <div
      className="w-1/3 p-2"
      onDragOver={handleOnDragOver}
      onDrop={handleDrop}
    >
      <div className="p-3 bg-purple-200">
        <h3 className="my-2 text-lg font-bold">{listName}</h3>
        <ul>
          {taskArr.map((task, index) => (
            <Task
              key={index}
              t={task}
              index={index}
              taskArr={taskArr}
              setTaskArr={(param) => {
                setTaskArr(param);
              }}
            ></Task>
          ))}
        </ul>
        <div className="flex items-center my-4">
          <input
            ref={taskName}
            className="flex-1 px-4 py-2 rounded-lg"
            placeholder="Add your task here"
          ></input>
          <button onClick={addTask}>➕</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
