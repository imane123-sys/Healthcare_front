import { useState } from "react";
import Acceuil from "./components/Acceuil";
import { Route, Routes } from "react-router-dom";
import TableauBord from "./components/TableauBord";
import Patients from "./components/Patients";

function App() {
  return (
    <>
    <Patients/>
      {/* <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/tableauboard" element={<TableauBord />} />
        {/* <Route path="/" element={<Acceuil/>}>
      <Route path="/" element={<Acceuil/>}>
      <Route path="/" element={<Acceuil/>}> */}
      {/* </Routes>  */}

    </>
  );
}

export default App;
