import { useState } from "react";
import Acceuil from "./components/Acceuil";
import { Route, Routes } from "react-router-dom";
import TableauBord from "./components/TableauBord";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Acceuil/>}/>
      <Route path="/tableauboard" element={<TableauBord/>}/>
      {/* <Route path="/" element={<Acceuil/>}>
      <Route path="/" element={<Acceuil/>}>
      <Route path="/" element={<Acceuil/>}> */}


    </Routes>
      <Acceuil />
    </>
  );
}

export default App;
