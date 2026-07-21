import { useState } from "react";
import Acceuil from "./components/Acceuil";
import { Route, Routes } from "react-router-dom";
import TableauBord from "./components/TableauBord";
import Patients from "./components/Patients";
import ModifierPatientForm from "./components/ModifierPatient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/tableauboard" element={<TableauBord />} />
        <Route path="/update" element={<ModifierPatientForm />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </>
  );
}

export default App;
