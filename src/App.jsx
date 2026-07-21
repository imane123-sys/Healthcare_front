import Acceuil from "./components/Acceuil";
import { Navigate, Route, Routes } from "react-router-dom";
import TableauBord from "./components/TableauBord";
import Patients from "./components/Patients";
import Login from "./components/Login";
import { AuthProvider } from "./Api/AuthContext";
import Register from "./components/Register";
import Medecins from "./components/Medecins";
import RendezVous from "./components/RendezVous";
import DossiersMedicaux from "./components/DossiersMedicaux";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/dashboard" element={<TableauBord />} />
        <Route
          path="/tableauboard"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/medecins" element={<Medecins />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/dossiers-medicaux" element={<DossiersMedicaux />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
