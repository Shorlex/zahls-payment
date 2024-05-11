import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Customers from "./Customers";
import Advantages from "./Advantages";
import Methods from "./Methods";
import Pricing from "./Pricing";
import Functions from "./Functions";

const App = () => {
  return (
    <div className="px-6 md:px-10 lg:px-14 xl:px-20 2xl:w-[1620px] 2xl:my-0 2xl:mx-auto">
      <NavBar />
      <Hero />
      <Customers />
      <Advantages />
      <Methods />
      <Pricing />
      <Functions />
    </div>
  );
};

export default App;
