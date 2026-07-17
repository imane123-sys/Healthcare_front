import React, { useEffect, useState } from "react";
import { patientApi } from "../Api/Patient";

export default function Patients() {
  const [patient, setPatient] = useState([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    patientApi
      .getAllPatients()
      .then((data) => setPatient(data))
      .catch((err) => setErreur(err.message));
  }, []);

  useEffect(() => {
    console.log(patient);
  }, [patient]);
  return <></>;
}
