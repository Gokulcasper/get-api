import React from "react";
import "./App.css";
import Asset from "./components/Asset";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />

      <h1>React App</h1>

      <Asset />
    </div>
  );
};

export default App;
