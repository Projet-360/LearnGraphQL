import React from "react";
import { Route, Routes } from "react-router-dom";

import "./app.css";
import Lazy from "./views/lazy";
import Simple from "./views/simple";
import Welcome from "./views/welcome";

const App = () => {
  return (
    <Routes>
      <Route path="/Lazy" element={<Lazy/>} />
      <Route path="/simple" element={<Simple/>} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default App;
