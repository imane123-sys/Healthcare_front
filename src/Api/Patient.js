import connexion from "./Connexion";

export const patientApi = {
  register: (data) => connexion.post("/patients", data),
  getPaginated: (page = 0, size = 5) =>
    connexion.get("/patients/patientPagines", { params: { page, size } }),
  getAllPatients: () => connexion.get("/patients"),
  getById: (id) => connexion.get(`/patients/${id}`),
  update: (id, date) => connexion.put(`/patients/${id}`, data),
  delete: (id) => connexion.delete(`/patients/${id}`),
};
 