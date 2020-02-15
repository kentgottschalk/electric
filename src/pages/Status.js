import React, { useState } from "react";

function Status() {
  const [todos, setTodos] = useState([
    { text: "Cicero", status: "alert" },
    { text: "DBC Brønd", status: "normal" },
    { text: "Odensebib", status: "alert" },
    { text: "Centralbibliotek.dk", status: "normal" },
    { text: "Jobs", status: "normal" },
    { text: "Assensbib.dk", status: "normal" },
    { text: "Whitebook", status: "normal" }
  ]);
  return (
    <div>
      {todos.map(item => (
        <div
          key={item.text}
          className="w-full flex justify-between items-center bg-gray-300 p-2 mt-2"
        >
          <span>{item.text}</span>
          <div>
            <div
              className={
                "h-4 w-4 rounded-full " +
                (item.status === "alert" ? "bg-red-400" : "bg-green-400")
              }
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;
