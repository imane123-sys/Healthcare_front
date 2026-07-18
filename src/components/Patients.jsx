import React, { useEffect, useState } from "react";
import { patientApi } from "../Api/Patient";


import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Le nom est obligatoire"),

  prenom: yup
    .string()
    .required("Le prénom est obligatoire"),

  email: yup
    .string()
    .email("Email invalide")
    .required("L'email est obligatoire"),

  telephone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Numéro invalide")
    .required("Le téléphone est obligatoire"),

  dateNaissance: yup
    .date()
    .required("La date de naissance est obligatoire")
});



export default function Patients() {
  const [patient, setPatient] = useState([]);
  const [erreur, setErreur] = useState("");
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(0);
  const [patientById, setPatientById] = useState({});


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
    patientApi.getById(id)
      .then((data) => setPatientById(data))
      .catch((err) => setErreur(err.message));


  }
  const addPatient = (data) => {
    patientApi.register(data)
      .catch((err) => setErreur(err.message))
    console.log(data);
    console.log(erreur);



  }

  const deletePatient = (id) => {
    patientApi.delete(id)
      .then(() => {
        setPatient((prevPatients) =>
          prevPatients.filter((p) => p.id !== id)
        )
      })
      .catch((err) => setErreur(err.message))
  }
  const ModifierPatient =(id,data)=>{

    patientApi.update(id,data)
    .then((res)=>{
      setPatient((prevPatients)=>
      prevPatients.map((p)=>
      p.id === id?res.data:p))

    })
    .catch((err)=>setErreur(err.message));


  }
  }
    



  return <>
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
        {patient.map((p) => <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.nom}</td>
          <td>{p.prenom}</td>
          <td>{p.email}</td>
          <td>{p.telephone}</td>
          <td>{p.dateNaissance}</td>
          <td><button onClick={() => getClientById(p.id)}>View</button>
            <button >Modifier</button>
            <button onClick={() => deletePatient(p.id)} >Supprimer</button>
            <button onClick={() => addPatient()}>+</button>
          </td>
        </tr>

        )}

      </tbody>

    </table >
    <button onClick={() => setPage(page - 1)} disabled={page === 0}>
      Previous
    </button>

    <button onClick={() => setPage(page + 1)}>
      Next
    </button>
    {
      patientById && (
        <div>

          {patientById.id} <br />
          {patientById.nom}<br />
          {patientById.prenom}<br />
          {patientById.email}<br />
          {patientById.telephone}<br />
          {patientById.dateNaissance}<br />
          <button onClick={() => setPatientById(null)}>close</button>

        </div>
      )
    }

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





  </>;
}
