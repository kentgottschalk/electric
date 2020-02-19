import React, { useState } from "react";
import Documentation from "./pages/Documentation";
import Projects from "./pages/Projects";
import Status from "./pages/Status";
import Support from "./pages/Support";
import Todo from "./pages/Todo";
const { remote } = require('electron')
const { BrowserWindow } = remote

const menu_items = [
  { id: 1, text: "Status", icon: "Status" },
  { id: 2, text: "Todo", icon: "Todo" },
  { id: 3, text: "Support", icon: "Support" },
  { id: 4, text: "Projects", icon: "Projects" },
  { id: 5, text: "Documentation", icon: "Projects" }
];

function App() {
  const [menu, setMenu] = useState(2);
  const [submenu, setSubmenu] = useState(false);

  function clickmenu(id) {
    if (id !== menu) {
      setMenu(id);
      setSubmenu(true);
    } else {
      setSubmenu(value => !value);
    }
  }

  function click(){
    new BrowserWindow()
  }

   

  return (
    <div className="flex">
      <div className="h-screen border-r">
      <button onClick={click}>Open Window</button>
        {menu_items.map((item, i) => (
          <div
            className={
              "cursor-pointer p-3 " +
              (menu === item.id
                ? "border-l-4 border-gray-600"
                : "border-l-4 border-white")
            }
            onClick={() => clickmenu(item.id)}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div>
      {submenu === true && (
        <div className="w-40 h-screen border-r p-3">Submenu</div>
      )}
      <div className="flex-1 h-screen bg-gray-100 p-3">
        <div>
          {(() => {
            switch (menu) {
              case 1:
                return <Status />;
              case 2:
                return <Todo />;
              case 3:
                return <Support />;
              case 4:
                return <Projects />;
              case 5:
                return <Documentation />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
