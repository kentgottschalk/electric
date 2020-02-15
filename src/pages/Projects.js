import React, { useState } from "react";

function Projects() {
  const [todos, setTodos] = useState([
    { text: "IMS", status: "alert", url: "https://www.google.dk" },
    {
      text: "Electric",
      status: "normal",
      url: "https://www.github.com/kentgottschalk"
    },
    { text: "Prometius", status: "alert", url: "https://www.google.dk" }
  ]);
  return (
    <div className="flex flex-wrap">
      {todos.map(item => (
        <div key={item.text} className="w-1/2 bg-gray-300 p-3">
          <div>{item.text}</div>
          <div>{item.status}</div>
          <a href={item.url}>{item.url}</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
