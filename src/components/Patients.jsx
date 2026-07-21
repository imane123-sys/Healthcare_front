import React, { useEffect, useState } from "react";
import { patientApi } from "../Api/Patient";
import SectionPage from "./SectionPage";

export default function Patients() {
  const [patient, setPatient] = useState([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    patientApi
      .getAllPatients()
      .then((data) => setPatient(data))
      .catch((err) => setErreur(err.message));
  }, []);

  useEffect(() => {
    console.log(patient);
  }, [patient]);
  return (
    <SectionPage
      title="Patients"
      description="Suivez les patients récupérés depuis l’API et accédez à leurs dossiers."
    >
      <div style={styles.summaryRow}>
        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Patients chargés</div>
          <div style={styles.summaryValue}>{patient.length}</div>
        </div>
        <div style={styles.summaryCard}>
          <div style={styles.summaryLabel}>Dernière erreur</div>
          <div style={styles.summaryValue}>{erreur || "Aucune"}</div>
        </div>
      </div>

      <div style={styles.listCard}>
        {patient.length === 0 ? (
          <div style={styles.emptyState}>
            {erreur ? erreur : "Aucun patient disponible pour le moment."}
          </div>
        ) : (
          patient.map((item, index) => (
            <div key={item.id ?? index} style={styles.patientRow}>
              <div>
                <div style={styles.patientName}>
                  {item.username || item.name || `Patient ${index + 1}`}
                </div>
                <div style={styles.patientMeta}>
                  {item.email || item.phone || "Informations non renseignées"}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </SectionPage>
  );
}

const styles = {
  summaryRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "20px",
  },
  summaryCard: {
    padding: "18px",
    borderRadius: "18px",
    background: "#F8FAFC",
    border: "1px solid #E2E8F0",
  },
  summaryLabel: {
    color: "#64748B",
    fontSize: "13px",
    marginBottom: "8px",
  },
  summaryValue: {
    color: "#0F172A",
    fontSize: "28px",
    fontWeight: 700,
  },
  listCard: {
    padding: "8px 0 0",
  },
  emptyState: {
    padding: "20px",
    borderRadius: "18px",
    background: "#F8FAFC",
    color: "#334155",
    border: "1px solid #E2E8F0",
  },
  patientRow: {
    padding: "16px 18px",
    borderRadius: "16px",
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
    marginBottom: "12px",
  },
  patientName: {
    color: "#0F172A",
    fontWeight: 700,
  },
  patientMeta: {
    color: "#64748B",
    marginTop: "4px",
    fontSize: "14px",
  },
};
