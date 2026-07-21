import connexion from "./Connexion";

export const login = async (email, password) => {
  return connexion.post("/auth/login", {
    email,
    password,
  });
};
export const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  return response.data;
};
