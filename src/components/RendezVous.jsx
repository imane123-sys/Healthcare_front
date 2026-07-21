import React from "react";
import SectionPage from "./SectionPage";

export default function RendezVous() {
  return (
    <SectionPage
      title="Rendez-vous"
      description="Gérez les prochains rendez-vous, les créneaux disponibles et les retards éventuels."
    >
      <div style={styles.placeholderCard}>
        Les rendez-vous seront listés dans cette zone.
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
