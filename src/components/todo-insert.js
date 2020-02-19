import React, { useState, useEffect } from "react";
import * as Database from "../db/Database";

function TodoInsert() {
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [query, setQuery] = useState('');

  const subs = [];

  useEffect(() => {
    async function addHero(event) {
      const db = await Database.get();
      db.heroes.insert({ name, color });
      setName("");
      setColor("");
    }
    if(query !== '') {addHero();}
    
  }, [query]);

  return (
    <div id="insert-box" className="box">
      <h3 className="font-semibold"> Add Todo </h3>{" "}
      <form
        onSubmit={event => {
          event.preventDefault();
          setQuery(name + color);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={event => setName(event.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={event => setColor(event.target.value)}
        />{" "}
        <button type="submit"> Insert a Hero </button>{" "}
      </form>{" "}
      <p>
        {" "}
        {name} - {color}{" "}
      </p>{" "}
      <hr className="my-3 border" />
    </div>
  );
}

export default TodoInsert;
