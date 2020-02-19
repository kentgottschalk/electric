import React from "react";
import TodoList from '../components/todo-list';
import TodoInsert from '../components/todo-insert';


function Todo() {

  return (
    <div>
      <TodoInsert/>
      <TodoList/>
    </div>
  );
}

export default Todo;
