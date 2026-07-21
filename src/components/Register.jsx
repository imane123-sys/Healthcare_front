// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "../Api/AuthService";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (password !== confirmPassword) {
//       setError("Les mots de passe ne correspondent pas.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       await register(username, email, password);

//       setSuccess(
//         "Inscription réussie ! Redirection vers la page de connexion...",
//       );

//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "Une erreur est survenue lors de l'inscription.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>HealthCare+</h2>
//         <p style={styles.subtitle}>Créer un nouveau compte personnel médical</p>

//         {error && <div style={styles.errorAlert}>{error}</div>}
//         {success && <div style={styles.successAlert}>{success}</div>}

//         <form onSubmit={handleSubmit}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Nom complet</label>
//             <input
//               type="text"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={styles.input}
//               placeholder="Dr. Jean Dupont"
//             />
//           </div>
//           <div>
//             <select name="" id="">
//                 <option value=""></option>
//                 <option value=""></option>
//                 <option value=""></option>
//             </select>

//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Adresse Email</label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={styles.input}
//               placeholder="jean.dupont@healthcare.com"
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Mot de passe</label>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//               placeholder="••••••••"
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Confirmer le mot de passe</label>
//             <input
//               type="password"
//               required
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               style={styles.input}
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             style={
//               isSubmitting
//                 ? { ...styles.button, opacity: 0.7, cursor: "not-allowed" }
//                 : styles.button
//             }
//           >
//             {isSubmitting ? "Inscription..." : "S'inscrire"}
//           </button>
//         </form>

//         <p style={styles.footerText}>
//           Déjà un compte ?{" "}
//           <span onClick={() => navigate("/login")} style={styles.link}>
//             Se connecter
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f0f4f8",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "2.5rem",
//     borderRadius: "8px",
//     backgroundColor: "#ffffff",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   },
//   title: {
//     textAlign: "center",
//     color: "#0056b3",
//     marginBottom: "0.5rem",
//     fontSize: "2rem",
//     fontWeight: "700",
//   },
//   subtitle: {
//     textAlign: "center",
//     color: "#6c757d",
//     marginBottom: "2rem",
//     fontSize: "0.95rem",
//   },
//   inputGroup: { marginBottom: "1.25rem" },
//   label: {
//     display: "block",
//     marginBottom: "0.5rem",
//     color: "#495057",
//     fontSize: "0.9rem",
//     fontWeight: "500",
//   },
//   input: {
//     width: "100%",
//     padding: "0.75rem",
//     borderRadius: "4px",
//     border: "1px solid #ced4da",
//     fontSize: "1rem",
//     boxSizing: "border-box",
//   },
//   button: {
//     width: "100%",
//     padding: "0.75rem",
//     border: "none",
//     borderRadius: "4px",
//     backgroundColor: "#0056b3",
//     color: "#fff",
//     fontSize: "1rem",
//     fontWeight: "600",
//     cursor: "pointer",
//     marginTop: "0.5rem",
//   },
//   errorAlert: {
//     padding: "0.75rem",
//     marginBottom: "1.5rem",
//     backgroundColor: "#f8d7da",
//     color: "#721c24",
//     border: "1px solid #f5c6cb",
//     borderRadius: "4px",
//     fontSize: "0.9rem",
//   },
//   successAlert: {
//     padding: "0.75rem",
//     marginBottom: "1.5rem",
//     backgroundColor: "#d4edda",
//     color: "#155724",
//     border: "1px solid #c3e6cb",
//     borderRadius: "4px",
//     fontSize: "0.9rem",
//   },
//   footerText: {
//     textAlign: "center",
//     marginTop: "1.5rem",
//     fontSize: "0.9rem",
//     color: "#6c757d",
//   },
//   link: {
//     color: "#0056b3",
//     fontWeight: "600",
//     cursor: "pointer",
//     textDecoration: "underline",
//   },
// };

// export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { register as registerUser } from "../Api/AuthService";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmittingState, setIsSubmittingState] = useState(false);

  const navigate = useNavigate();

  // Initialisation de React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Surveillance du mot de passe pour la validation de la confirmation
  const passwordValue = watch("password");

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");
    setIsSubmittingState(true);

    try {
      // Appel API avec les données du formulaire
      await registerUser(data.username, data.email, data.password, data.role);

      setSuccess(
        "Inscription réussie ! Redirection vers la page de connexion...",
      );

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Une erreur est survenue lors de l'inscription.",
      );
    } finally {
      setIsSubmittingState(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>HealthCare+</h2>
        <p style={styles.subtitle}>Créer un nouveau compte personnel médical</p>

        {error && <div style={styles.errorAlert}>{error}</div>}
        {success && <div style={styles.successAlert}>{success}</div>}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nom complet */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nom complet</label>
            <input
              type="text"
              {...register("username", {
                required: "Le nom complet est requis",
              })}
              style={styles.input}
              placeholder="Dr. Jean Dupont"
            />
            {errors.username && (
              <span style={styles.errorText}>{errors.username.message}</span>
            )}
          </div>

          {/* Rôle Médical */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Rôle médical</label>
            <select
              {...register("role", {
                required: "Veuillez sélectionner un rôle",
              })}
              style={styles.input}
            >
              <option value="">Sélectionnez votre rôle</option>
              <option value="patient">patient</option>
              <option value="admin">admin</option>
              <option value="doctor">doctor</option>
            </select>
            {errors.role && (
              <span style={styles.errorText}>{errors.role.message}</span>
            )}
          </div>

          {/* Adresse Email */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Adresse Email</label>
            <input
              type="email"
              {...register("email", {
                required: "L'adresse email est requise",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Adresse email invalide",
                },
              })}
              style={styles.input}
              placeholder="jean.dupont@healthcare.com"
            />
            {errors.email && (
              <span style={styles.errorText}>{errors.email.message}</span>
            )}
          </div>

          {/* Mot de passe */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mot de passe</label>
            <input
              type="password"
              {...register("password", {
                required: "Le mot de passe est requis",
                minLength: {
                  value: 6,
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
              })}
              style={styles.input}
              placeholder="••••••••"
            />
            {errors.password && (
              <span style={styles.errorText}>{errors.password.message}</span>
            )}
          </div>

          {/* Confirmer le mot de passe */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirmer le mot de passe</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Veuillez confirmer votre mot de passe",
                validate: (value) =>
                  value === passwordValue ||
                  "Les mots de passe ne correspondent pas.",
              })}
              style={styles.input}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <span style={styles.errorText}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmittingState}
            style={
              isSubmittingState
                ? { ...styles.button, opacity: 0.7, cursor: "not-allowed" }
                : styles.button
            }
          >
            {isSubmittingState ? "Inscription..." : "S'inscrire"}
          </button>
        </form>

        <p style={styles.footerText}>
          Déjà un compte ?{" "}
          <span onClick={() => navigate("/login")} style={styles.link}>
            Se connecter
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px 0",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "2.5rem",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    color: "#0056b3",
    marginBottom: "0.5rem",
    fontSize: "2rem",
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    color: "#6c757d",
    marginBottom: "2rem",
    fontSize: "0.95rem",
  },
  inputGroup: { marginBottom: "1.25rem" },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#495057",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#0056b3",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  errorAlert: {
    padding: "0.75rem",
    marginBottom: "1.5rem",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
    borderRadius: "4px",
    fontSize: "0.9rem",
  },
  successAlert: {
    padding: "0.75rem",
    marginBottom: "1.5rem",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
    borderRadius: "4px",
    fontSize: "0.9rem",
  },
  errorText: {
    display: "block",
    color: "#dc3545",
    fontSize: "0.8rem",
    marginTop: "0.25rem",
  },
  footerText: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "0.9rem",
    color: "#6c757d",
  },
  link: {
    color: "#0056b3",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Register;
