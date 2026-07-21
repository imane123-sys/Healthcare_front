import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import { patientApi } from "../Api/Patient";

const schema = yup.object({
  nom: yup.string().required("Le nom est obligatoire"),
  prenom: yup.string().required("Le prénom est obligatoire"),
  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est obligatoire"),
  telephone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Numéro invalide")
    .required("Le téléphone est obligatoire"),
  dateNaissance: yup.date().required("La date de naissance est obligatoire"),
});

export default function ModifierPatientForm() {
  const location = useLocation();
  const patient = location.state?.patient;
  const navigate = useNavigate();
  if (!patient) {
    return <p>Aucun patient n'est trouvé</p>;
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (patient) {
      reset(patient);
    }
  }, [patient, reset]);

  const onSubmit = (data) => {
    ModifierPatient(patient.id, data);
  };

  const ModifierPatient = (id, data) => {
    patientApi
      .update(id, data)
      // .then((res) => {
      //   setPatient((prevPatients) =>
      //     prevPatients.map((p)  => (p.id === id ? res.data : p)),
      //   );
      // })
      .catch((err) => setErreur(err.message));
    reset();
    navigate("/patients");
  };

  return (
    <div>
      <h2>Modifier patient</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>ID :</label>
        <input type="number" value={patient?.id || ""} readOnly />

        <label>Nom :</label>
        <input type="text" {...register("nom")} />
        <p>{errors.nom?.message}</p>

        <label>Prénom :</label>
        <input type="text" {...register("prenom")} />
        <p>{errors.prenom?.message}</p>

        <label>Email :</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <label>Téléphone :</label>
        <input type="tel" {...register("telephone")} />
        <p>{errors.telephone?.message}</p>

        <label>Date de naissance :</label>
        <input type="date" {...register("dateNaissance")} />
        <p>{errors.dateNaissance?.message}</p>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
