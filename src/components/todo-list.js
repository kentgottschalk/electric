import React, { useState, useEffect } from "react";
import * as Database from "../db/Database";

function TodoList() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const subs = [];

  useEffect(() => {
    async function fetchData() {
      const db = await Database.get();

      const sub = db.heroes
        .find()
        .sort({
          name: 1
        })
        .$.subscribe(heroes => {
          if (!heroes) {
            return;
          }
          console.log("reload heroes-list ");
          console.dir(heroes);
          setHeroes(heroes);
          setLoading(false);
        });
      subs.push(sub);
    }
    fetchData();
  }, []);

  useEffect(() => {
    subs.forEach(sub => sub.unsubscribe());
  });

  /*
    deleteHero = async (hero) => {
        console.log('delete hero:');
        console.dir(hero);
    }

    editHero = async (hero) => {
        console.log('edit hero:');
        console.dir(hero);
    }
*/
  /*
    renderActions = () => {
        // TODO
        // return (
        //     <div className="actions">
        //         <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.editHero(hero)}></i>
        //         <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.deleteHero(hero)}></i>
        //     </div>
        // )
        return null
    }
    */

  console.log(heroes);

  return (
    <div id="list-box" className="box">
      <h3 className="font-semibold"> Todos </h3>{" "}
      <ul id="heroes-list">
        {" "}
        {loading && <span> Loading... </span>}{" "}
        {!loading && heroes.length === 0 && <span> No heroes </span>}{" "}
        {heroes.map(hero => {
          return (
            <li key={hero.name}>
              <div className="color-box"> </div>{" "}
              <span className="name">
                {" "}
                {hero.name} - {hero.color}
              </span>{" "}
              {/*this.renderActions()*/}{" "}
            </li>
          );
        })}{" "}
      </ul>{" "}
    </div>
  );
}

export default TodoList;
