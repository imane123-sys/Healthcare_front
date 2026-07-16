import React from "react";
import "../css/Acceuil.css";

export default function Acceuil() {
  return (
    <div className="page-wrapper">
      <div className="page-body">
        <div className="content-container">
          {/* ---------- Hero section ---------- */}
          <div className="hero-section">
            <div className="hero-blur-top" />
            <div className="hero-blur-bottom" />

          <div className="hero-flex">
              <div className="hero-left">
                <div className="hero-heading-wrap">
                  <div className="hero-heading">
                    <span className="hero-heading-line1">
                      Bienvenue sur
                      <br />
                    </span>
                    <span className="hero-heading-line2">HealthCare+</span>
                  </div>
                </div>

                <div className="hero-subtext-wrap">
                  <div className="hero-subtext">
                    La plateforme centralisée pour optimiser le parcours de
                    soin.
                    <br />
                    Connectez vos équipes, gérez vos patients et accédez aux
                    <br />
                    données critiques en temps réel pour une prise en charge
                    <br />
                    d&apos;excellence.
                  </div>
                </div>

                <div className="hero-cta-wrap">
                  <button className="hero-cta-button">
                    <div className="hero-cta-shadow" />
                    <div className="hero-cta-label-wrap">
                      <div className="hero-cta-label">
                        Accéder au tableau de bord
                      </div>
                    </div>
                    <div className="hero-cta-icon-wrap">
                      <div className="hero-cta-icon" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="hero-right">
                <div className="hero-image-card">
                  <img
                    className="hero-image"
                    src="https://placehold.co/464x464"
                    alt="Interface HealthCare+"
                  />
                  <div className="hero-stat-badge">
                    <div className="hero-stat-shadow" />
                    <div className="hero-stat-icon-wrap">
                      <div className="hero-stat-icon" />
                    </div>
                    <div className="hero-stat-text">
                      <div className="hero-stat-label">
                        <span>Patients du jour</span>
                      </div>
                      <div className="hero-stat-value">
                        <span>128 Actifs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Mission section ---------- */}
          <div className="mission-section">
            <div className="mission-content">
              <div className="mission-title-wrap">
                <div className="mission-title">Notre Mission Technologique</div>
              </div>
              <div className="mission-divider" />
              <div className="mission-text-wrap">
                <div className="mission-text">
                  HealthCare+ a été conçu pour éliminer les silos
                  d&apos;information en milieu hospitalier. Notre mission est
                  <br />
                  de fournir aux praticiens une interface intuitive qui réduit
                  la charge mentale administrative au profit
                  <br />
                  de la relation patient.
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Modules section ---------- */}
          <div className="modules-list">
            {/* Carte 1 — Gestion des patients */}
            <div className="module-card module-card--white">
              <div className="module-card-watermark">
                <div className="module-card-watermark-icon" />
              </div>
              <div className="module-card-header">
                <div className="module-icon-wrap">
                  <div className="module-icon-inner">
                    <div className="module-icon-blue" />
                  </div>
                </div>
                <div className="module-title-wrap">
                  <div className="module-title">Gestion des patients</div>
                </div>
                <div className="module-desc-wrap">
                  <div className="module-desc">
                    Base de données complète avec historique de
                    <br />
                    consultation, allergies et constantes vitales
                    <br />
                    actualisées.
                  </div>
                </div>
              </div>
              <div className="module-footer">
                <div className="module-link-row">
                  <button className="module-link">Explorer le module</button>
                  <div className="module-link-icon-wrap">
                    <div className="module-link-icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 2 — Gestion des médecins */}
            <div className="module-card module-card--tinted">
              <div className="module-card-header--row">
                <div className="module-icon-wrap--dark">
                  <div className="module-icon-inner">
                    <div className="module-icon-white" />
                  </div>
                </div>
                <div className="module-title-wrap--tight">
                  <div className="module-title-wrap">
                    <div className="module-title--sm">
                      Gestion des médecins
                    </div>
                  </div>
                  <div className="module-title-wrap">
                    <div className="module-desc">
                      Planning des gardes et annuaire des spécialistes par
                      <br />
                      service.
                    </div>
                  </div>
                </div>
              </div>
              <div className="module-footer--tinted">
                <div className="module-link-row">
                  <button className="module-link">Gérer les équipes</button>
                </div>
              </div>
            </div>

            {/* Carte 3 — Suivi analytique (contenu original tronqué, reconstruit
                à partir du même patron visuel : icône orange 18x20 sur fond
                rgba(188, 72, 0, 0.10)) */}
            <div className="module-card module-card--white">
              <div className="module-card-header">
                <div className="module-icon-wrap--orange">
                  <div className="module-icon-inner">
                    <div className="module-icon-orange" />
                  </div>
                </div>
                <div className="module-title-wrap">
                  <div className="module-title">Suivi analytique</div>
                </div>
                <div className="module-desc-wrap">
                  <div className="module-desc">
                    Tableaux de bord et statistiques en temps réel sur
                    <br />
                    l&apos;activité et la performance des services.
                  </div>
                </div>
              </div>
              <div className="module-footer">
                <div className="module-link-row">
                  <button className="module-link">Voir les statistiques</button>
                  <div className="module-link-icon-wrap">
                    <div className="module-link-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
