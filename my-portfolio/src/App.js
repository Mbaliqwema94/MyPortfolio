import React from "react";
import "./index.css";

import home  from "./routes/home";
import contacts from "./routes/contacts";
import about from "./routes/about";
import projects from "./routes/projects";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<home/>}/>
      <Route path="/" contacts={<contacts/>}/>
      <Route path="/" about={<about/>}/>
      <Route path="/" projects={<projects/>}/>
    </Routes>
    </>
  );
}

export default App;
