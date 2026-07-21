import React from "react";
import { Link } from "react-router-dom";

export default function SectionPage({ title, description, children }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <p style={styles.kicker}>HealthCare+</p>
            <h1 style={styles.title}>{title}</h1>
            <p style={styles.description}>{description}</p>
          </div>
          <Link to="/dashboard" style={styles.backLink}>
            Retour au tableau de bord
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "32px 16px",
    background:
      "radial-gradient(circle at top, rgba(0, 74, 198, 0.14), transparent 42%), linear-gradient(180deg, #f7f9ff 0%, #eef3ff 100%)",
    boxSizing: "border-box",
  },
  card: {
    width: "min(1120px, 100%)",
    margin: "0 auto",
    padding: "28px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.10)",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "flex-start",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  kicker: {
    margin: 0,
    color: "#004AC6",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },
  title: {
    margin: "6px 0 10px",
    fontSize: "clamp(28px, 4vw, 44px)",
    lineHeight: 1.1,
    color: "#101828",
  },
  description: {
    margin: 0,
    maxWidth: "58ch",
    color: "#475467",
    fontSize: "16px",
    lineHeight: 1.6,
  },
  backLink: {
    padding: "12px 16px",
    borderRadius: "14px",
    background: "#004AC6",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    boxShadow: "0 12px 24px rgba(0, 74, 198, 0.24)",
    whiteSpace: "nowrap",
  },
};
