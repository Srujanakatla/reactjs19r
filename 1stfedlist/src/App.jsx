import React from "react";
import MenuItems from "./components/MenuItems";
import Cards from "./components/Cards";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  return (
    <div>
      <MenuItems />
      <h1 className="title">FakeStore API Products</h1>
      <Cards />
      <h2 className="subtitle">Product List</h2>
      <Table />
    </div>
  );
};

export default App;
