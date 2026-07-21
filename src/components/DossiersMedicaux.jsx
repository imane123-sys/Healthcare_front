import React from "react";
import SectionPage from "./SectionPage";

export default function DossiersMedicaux() {
  return (
    <SectionPage
      title="Dossiers médicaux"
      description="Centralisez les antécédents, examens et notes cliniques dans un espace unique."
    >
      <div style={styles.placeholderCard}>
        Les dossiers médicaux apparaîtront ici.
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
