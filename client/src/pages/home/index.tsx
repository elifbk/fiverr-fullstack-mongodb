import React, { type FC } from "react";
import Hero from "./hero";
import Categoty from "./categoty";
import Info from "./info";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <div className="p-5">
        <Categoty />

        <Info />
      </div>
    </div>
  );
};

export default Home;
