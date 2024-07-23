import React, { useState } from "react";
import deleteIcon from "../assets/delete.png";
import edit from "../assets/edit.png";

const Todo = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (id) => {
    const filteredList = list.filter((elm) => elm !== list[id]);
    console.log("FilterdList", filteredList);
    setList(filteredList);
  };

  const handleUpdate = () => {
    list.splice(uid, 1, input);
    setInput("");
    setUpdate(false);
  };

  const handleEdit = (id) => {
    const filterList = list.filter((elm) => elm === list[id]);
    // console.log(filterList)
    // console.log(filterList[0])
    setInput(filterList[0]);
    setUid(id);
    setUpdate(true);
  };

  return (
    <div className="container-todo">
      <h3 style={{ textAlign: "center" }}> TODO-APP </h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your Task"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        {update ? (
          <button onClick={handleUpdate}> Update Task</button>
        ) : (
          <button onClick={handleAddTask}> Add Task</button>
        )}
      </div>
      <div className="list">
        <ul>
          {list.map((item, id) => {
            return (
              <li key={id}>
                {item}
                <img
                  src={edit}
                  alt="Edit"
                  className="edit-icon"
                  onClick={() => handleEdit(id)}
                />{" "}
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="delete-icon"
                  onClick={() => handleDelete(id)}
                />{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
