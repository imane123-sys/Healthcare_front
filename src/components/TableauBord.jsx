import React from "react";
import { NavLink } from "react-router-dom";
import "../css/TableauBord.css";

const sidebarItems = [
  {
    to: "/",
    label: "Accueil",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 3 10v11h6v-6h6v6h6V10z" />
      </svg>
    ),
  },
  {
    to: "/dashboard",
    label: "Tableau de bord",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" />
      </svg>
    ),
  },
  {
    to: "/patients",
    label: "Patients",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
      </svg>
    ),
  },
  {
    to: "/medecins",
    label: "Médecins",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 2h6v4H9zm-2 6h10v2l-1 8H8L7 10zm3 4h4v2h-4z" />
      </svg>
    ),
  },
  {
    to: "/rendez-vous",
    label: "Rendez-vous",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3zm13 6H4v12h16zm-10 3h4v4h-4z" />
      </svg>
    ),
  },
  {
    to: "/dossiers-medicaux",
    label: "Dossiers médicaux",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9l3 3v15H6zm8 1.5V7h2.5zM8 11h8v2H8zm0 4h8v2H8z" />
      </svg>
    ),
  },
];

export default function TableauBord() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-mark">H+</div>
          <div>
            <div className="sidebar-brand-title">HealthCare+</div>
            <div className="sidebar-brand-subtitle">Espace médical</div>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Navigation principale">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `sidebar-link${isActive ? " sidebar-link--active" : ""}`
              }
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-topbar">
          <div>
            <p className="dashboard-eyebrow">Tableau de bord</p>
            <h1 className="dashboard-title">Vue d’ensemble de l’activité</h1>
            <p className="dashboard-subtitle">
              Suivez les patients, les rendez-vous et les dossiers dans une
              interface plus claire et responsive.
            </p>
          </div>

          <div className="dashboard-actions">
            <div className="dashboard-search" aria-hidden="true">
              <span className="dashboard-search-icon" />
              <span>Recherche</span>
            </div>
            <button className="dashboard-primary-action">
              Ajouter patient
            </button>
          </div>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <span className="stat-card-label">Total Patients</span>
            <strong className="stat-card-value">1,284</strong>
            <span className="stat-card-meta">+12% ce mois-ci</span>
          </article>
          <article className="stat-card">
            <span className="stat-card-label">Médecins actifs</span>
            <strong className="stat-card-value">42</strong>
            <span className="stat-card-meta">En service aujourd’hui</span>
          </article>
          <article className="stat-card">
            <span className="stat-card-label">Rendez-vous aujourd’hui</span>
            <strong className="stat-card-value">18</strong>
            <span className="stat-card-meta">82% de remplissage</span>
          </article>
          <article className="stat-card">
            <span className="stat-card-label">Dossiers médicaux</span>
            <strong className="stat-card-value">4,892</strong>
            <span className="stat-card-meta">Dernière MAJ: 2 min</span>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="panel panel--wide">
            <div className="panel-header">
              <div>
                <h2>Aperçu des rendez-vous</h2>
                <p>Flux mensuel des patients par service</p>
              </div>
              <button className="panel-chip">Derniers 6 mois</button>
            </div>

            <div className="chart-bars" aria-hidden="true">
              {[38, 54, 44, 70, 58, 82].map((height, index) => (
                <div className="chart-bar-wrap" key={index}>
                  <div className="chart-bar" style={{ height: `${height}%` }} />
                  <span>
                    {["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"][index]}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel--narrow panel--calendar">
            <div className="panel-header">
              <div>
                <h2>Calendrier</h2>
                <p>Prochain rendez-vous à 14:30</p>
              </div>
              <button
                className="panel-icon-button"
                aria-label="Options calendrier"
              >
                <span />
              </button>
            </div>

            <div className="calendar-grid">
              {[
                "L",
                "M",
                "M",
                "J",
                "V",
                "S",
                "D",
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
              ].map((day, index) => (
                <div
                  key={`${day}-${index}`}
                  className={
                    index === 10
                      ? "calendar-cell calendar-cell--active"
                      : "calendar-cell"
                  }
                >
                  {day}
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel--wide">
            <div className="panel-header">
              <div>
                <h2>Derniers patients ajoutés</h2>
                <p>Entrées récentes enregistrées par le secrétariat</p>
              </div>
              <button className="panel-link-button">Voir tout</button>
            </div>

            <div className="table-list">
              {[
                ["Marie Dupont", "Aujourd’hui, 09:12", "VÉRIFIÉ"],
                ["Pierre Laurent", "Hier, 16:45", "EN ATTENTE"],
                ["Sophie Martin", "12 Juin, 14:20", "VÉRIFIÉ"],
              ].map((row) => (
                <div className="table-row" key={row[0]}>
                  <div>
                    <strong>{row[0]}</strong>
                    <span>{row[1]}</span>
                  </div>
                  <span className="status-pill">{row[2]}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel--narrow">
            <div className="panel-header">
              <div>
                <h2>Derniers rendez-vous</h2>
                <p>Consultations à venir</p>
              </div>
            </div>

            <div className="appointment-list">
              {[
                ["18 Juin", "Consultation Générale", "Marc Durand • 10:00"],
                ["18 Juin", "Échographie", "Alice Vasseur • 11:30"],
                ["18 Juin", "Suivi Post-Op", "Robert King • 14:00"],
              ].map((item) => (
                <div className="appointment-item" key={item[1]}>
                  <div className="appointment-date">
                    <span>{item[0].split(" ")[1]}</span>
                    <strong>{item[0].split(" ")[0]}</strong>
                  </div>
                  <div>
                    <strong>{item[1]}</strong>
                    <span>{item[2]}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
