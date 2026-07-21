import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ModifierPatientForm from "./ModifierPatient";
import { Link, useNavigate } from "react-router-dom";
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
export default function AjoutPatient() {
  const [error, setErreur] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addPatient = (data) => {
    patientApi.register(data).catch((err) => setErreur(err.message));
    console.log(data);
    console.log(error);
    navigate("/patients");
  };
  return (
    <>
      <h1>ajouter Patient:</h1>
      <form onSubmit={handleSubmit(addPatient)}>
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
    </>
  );
}
