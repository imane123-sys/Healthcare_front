import React from "react";
import SectionPage from "./SectionPage";

export default function Medecins() {
  return (
    <SectionPage
      title="Médecins"
      description="Consultez l’annuaire des praticiens, les spécialités et les disponibilités de l’équipe médicale."
    >
      <div style={styles.placeholderCard}>
        Planning et profils médicaux à afficher ici.
      </div>
    </SectionPage>
  );
}

const styles = {
  placeholderCard: {
    padding: "20px",
    borderRadius: "18px",
    background: "#F8FAFC",
    color: "#334155",
    border: "1px solid #E2E8F0",
  },
};
