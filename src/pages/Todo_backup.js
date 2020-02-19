import React, { useState } from 'react';

function Todo() {
  const [todoitem, setTodoitem] = useState('');
  const [todos, setTodos] = useState([
    { text: 'Learn about React', status: 'done' },
    { text: 'Meet friend for lunch', status: 'done' },
    { text: 'Build really cool todo app', status: 'postponed' },
    { text: 'Get home to the family', status: 'todo' },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos(prevArray => [...prevArray, { text: todoitem }]);
    setTodoitem('');
  }

  function changeStatus(event) {
    setTodos(prevArray => [...prevArray, { text: todoitem }]);
    setTodoitem('');
  }

  const sum_all = 4;
  const sum_done = 2;
  const sum_postponed = 1;
  const sum_todo = 1;

  return (
    <div>
      <div className="flex pb-3">
        <div className="w-1/2 h-3 bg-green-400"></div>
        <div className="w-1/4 h-3 bg-yellow-400"></div>
        <div className="w-1/4 h-3 bg-red-400"></div>
      </div>
      <div className="w-full flex bg-gray-300 p-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoitem}
            name="name"
            placeholder="List name"
            onChange={event => {
              event.preventDefault();
              setTodoitem(event.target.value);
            }}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
      {todos.map(item => (
        <div
          key={item.text}
          className="w-full flex justify-between bg-gray-300 p-3 mt-2"
        >
          <span>{item.text}</span>
          <div>
            <span className="cursor-pointer pr-2 ">Done</span>
            <span className="cursor-pointer pr-2">Delete</span>
            <span className="cursor-pointer pr-2">Postpone</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
