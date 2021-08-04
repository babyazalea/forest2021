import React from "react";

import Layout from "./components/Layout/Layout";
import Lights from "./components/Background/Lights/Lights";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Lights />
      <Layout />
    </div>
  );
};

export default App;
