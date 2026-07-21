import { useState } from "react";
import Acceuil from "./components/Acceuil";
import { Route, Routes } from "react-router-dom";
import TableauBord from "./components/TableauBord";
import Patients from "./components/Patients";
import Login from "./components/Login";
import { AuthProvider } from "./Api/AuthContext";
import Register from "./components/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/tableauboard" element={<TableauBord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/patients" element={<Patients />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
