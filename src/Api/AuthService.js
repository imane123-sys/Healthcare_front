import connexion from "./Connexion";

export const login = async (email, password) => {
  return connexion.post("/auth/login", {
    email,
    password,
  });
};
export const register = async (username, email, password, role) => {
    console.log(role);
  const response = await connexion.post("/auth/register", {
    username,
    email,
    password,
    role,
  });
  

  return response.data;
};
