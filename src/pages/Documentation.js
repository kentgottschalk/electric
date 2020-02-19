import React from "react";
import Submenu from "../components/Submenu";

import HeroList from '../components/hero-list';
import HeroInsert from '../components/hero-insert';

function Documentation() {
  return (
    <div>
      <Submenu text="test" />
      <HeroList/>
      <HeroInsert/>
    </div>
  );
}

export default Documentation;
