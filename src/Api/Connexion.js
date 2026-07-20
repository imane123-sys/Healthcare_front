import axios from "axios";

const connexion = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
  },
});
connexion.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Erreur";
    return Promise.reject({ status: error.response?.status, message });
  },
);

export default connexion;
