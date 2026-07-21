import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Api/AuthService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setIsSubmitting(true);

    try {
      await register(username, email, password);

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
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>HealthCare+</h2>
        <p style={styles.subtitle}>Créer un nouveau compte personnel médical</p>

        {error && <div style={styles.errorAlert}>{error}</div>}
        {success && <div style={styles.successAlert}>{success}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nom complet</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Dr. Jean Dupont"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Adresse Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="jean.dupont@healthcare.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirmer le mot de passe</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={
              isSubmitting
                ? { ...styles.button, opacity: 0.7, cursor: "not-allowed" }
                : styles.button
            }
          >
            {isSubmitting ? "Inscription..." : "S'inscrire"}
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
    height: "100vh",
    backgroundColor: "#f0f4f8",
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
