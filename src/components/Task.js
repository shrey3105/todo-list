const Task = ({ t, index, setTaskArr, taskArr }) => {
  const onDragStart = (event, index) => {
    //event.preventDefault();
    console.log("drag started");
    event.dataTransfer.setData("text/plain", t);
    let arr = [...taskArr];
    arr.splice(index, 1);
    setTimeout(() => {
      setTaskArr(arr);
    }, 0);
  };

  return (
    <>
      {
        <li
          draggable
          className="my-2 w-full p-2 text-black bg-white rounded-lg flex"
          onDragStart={(event) => {
            onDragStart(event, index);
          }}
          onDrag={(event) => event.preventDefault()}
        >
          <span>{t}</span>
        </li>
      }
    </>
  );
};

export default Task;
