import React, { useEffect, useState } from "react";
import { patientApi } from "../Api/Patient";
import { Link, useNavigate } from "react-router-dom";

export default function Patients() {
  const [patient, setPatient] = useState([]);
  const [erreur, setErreur] = useState("");
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(0);
  const [patientById, setPatientById] = useState(null);

  useEffect(() => {
    patientApi
      .getAllPatients()
      .then((data) => setPatient(data))
      .catch((err) => setErreur(err.message));
  }, []);

  useEffect(() => {
    patientApi
      .getPaginated(page, size)
      .then((res) => setPatient(res.content))
      .catch((err) => setErreur(err.message));
  }, [page, size]);

  const getClientById = (id) => {
    patientApi
      .getById(id)
      .then((data) => setPatientById(data))
      .catch((err) => setErreur(err.message));
  };

  const deletePatient = (id) => {
    patientApi
      .delete(id)
      .then(() => {
        setPatient((prevPatients) => prevPatients.filter((p) => p.id !== id));
      })
      .catch((err) => setErreur(err.message));
  };
  const navigate = useNavigate();

  const handleModifier = (patientSelectionne) => {
    // setPatientById(patientSelectionne);

    navigate("/update", { state: { patient: patientSelectionne } });
  };

  return (
    <>
      <Link to="/ajouterFormulaire">Ajouter</Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Date de naissance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nom}</td>
              <td>{p.prenom}</td>
              <td>{p.email}</td>
              <td>{p.telephone}</td>
              <td>{p.dateNaissance}</td>
              <td>
                <button onClick={() => getClientById(p.id)}>View</button>
                <button onClick={() => deletePatient(p.id)}>Supprimer</button>
                <button onClick={() => handleModifier(p)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        Previous
      </button>

      <button onClick={() => setPage(page + 1)}>Next</button>
      {patientById && (
        <div>
          {patientById.id} <br />
          {patientById.nom}
          <br />
          {patientById.prenom}
          <br />
          {patientById.email}
          <br />
          {patientById.telephone}
          <br />
          {patientById.dateNaissance}
          <br />
          <button onClick={() => setPatientById(null)}>close</button>
        </div>
      )}
    </>
  );
}
